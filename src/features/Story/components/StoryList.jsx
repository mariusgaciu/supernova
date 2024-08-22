import React from 'react';
import { FlatList, Text } from 'react-native';

import StoryItem from './StoryItem';
import { ActivityIndicator, ListSeparator, RefreshControl } from '@components';
import { useFetchStories } from '../hooks/useFetchStories';
import { useStyles } from '@hooks';

function StoryList({ storyType }) {
  const { defaultStyles } = useStyles();

  const {
    data,
    isLoading,
    isRefreshing,
    isError,
    hasMoreItems,
    isSuccess,
    lastRefreshed,
    refresh,
    loadMoreItems,
  } = useFetchStories({
    storyType,
  });

  if (isLoading) return <ActivityIndicator />;

  if (isError) return <Text style={[defaultStyles.lbError]}>ERROR</Text>;

  return (
    <FlatList
      ItemSeparatorComponent={<ListSeparator />}
      ListFooterComponent={
        <ActivityIndicator size="small" isEndReached={!hasMoreItems} />
      }
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
      }
      onEndReached={loadMoreItems}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ index, item }) => (
        <StoryItem
          index={index}
          id={item.id}
          url={item?.url}
          title={item.title}
          user={item.by}
          noOfComments={item.descendants}
          timestamp={item.time}
          score={item.score}
          lastRefreshed={lastRefreshed}
        />
      )}
    />
  );
}

export default StoryList;
