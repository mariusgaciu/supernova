import React, { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CONFIG } from '@config';
import { ActivityIndicator, Separator, RefreshControl } from '@components';
import StoryHeader from './StoryHeader';
import CommentItem from './CommentItem';
import { useFetchStoryDetails } from '../hooks/useFetchStoryDetails';
import { useStyles } from '@hooks';

function StoryDetails({ id }) {
  const [visibleComments, setVisibleComments] = useState(
    CONFIG.COMMENTS_PER_LOAD
  );

  const { defaultStyles } = useStyles();

  const { data, isLoading, isRefreshing, isError, lastRefreshed, refresh } =
    useFetchStoryDetails({ id });

  const visibleItems = data?.children.slice(0, visibleComments);
  const isEndReached = data?.children.length <= visibleComments;

  const handleOnEndReached = useCallback(() => {
    setVisibleComments((prev) => prev + CONFIG.COMMENTS_PER_LOAD);
  }, []);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <View>
        <CommentItem
          depth={item.depth}
          user={item.author}
          totalReplies={item.number_of_replies}
          timestamp={item.created_at}
          comment={item.text}
        />
      </View>
    ),
    []
  );

  if (isLoading) return <ActivityIndicator />;

  if (isError) return <Text style={[defaultStyles.lbError]}>ERROR</Text>;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        ListHeaderComponent={
          <StoryHeader
            url={data.url}
            title={data.title}
            user={data.author}
            noOfComments={data.descendants}
            timestamp={data.created_at_i}
            score={data.points}
          />
        }
        ListFooterComponent={
          <View>
            {isEndReached ? (
              <Separator style={defaultStyles.bgPrimary} height={25} />
            ) : (
              <ActivityIndicator size="small" isEndReached={isEndReached} />
            )}
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
        data={visibleItems}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
  },
});

export default StoryDetails;
