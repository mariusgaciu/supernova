import React, { useCallback, useState, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { CONFIG } from '@config';
import { ActivityIndicator, Separator, RefreshControl } from '@components';
import StoryHeader from './StoryHeader';
import CommentItem from './CommentItem';
import { useFetchStoryDetails } from '../hooks/useFetchStoryDetails';
import { useStyles } from '@hooks';

function StoryDetails({ id }) {
  const { defaultStyles } = useStyles();

  const [visibleComments, setVisibleComments] = useState(
    CONFIG.COMMENTS_PER_LOAD
  );

  const { data, isLoading, isRefreshing, isError, lastRefreshed, refresh } =
    useFetchStoryDetails({ id });

  const visibleItems = useMemo(() => {
    return data?.children
      .filter((comment) => !comment.collapsed)
      .slice(0, visibleComments);
  }, [data?.children, visibleComments]);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <CommentItem
        id={item.id}
        depth={item.depth}
        user={item.author}
        noOfReplies={item.noOfReplies}
        timestamp={item.created_at}
        comment={item.text}
        childrenIds={item.childrenIds}
        directChildrenIds={item.directChildrenIds}
      />
    ),
    []
  );

  if (isLoading) return <ActivityIndicator />;

  if (isError) return <Text style={[defaultStyles.lbError]}>ERROR</Text>;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <StoryHeader
            url={data.url}
            title={data.title}
            user={data.author}
            body={data.text}
            noOfComments={data.descendants}
            timestamp={data.created_at_i}
            score={data.points}
          />
        }
        ListFooterComponent={
          <View>
            {false ? (
              <Separator style={defaultStyles.bgPrimary} height={25} />
            ) : (
              <ActivityIndicator size="small" isEndReached={false} />
            )}
          </View>
        }
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
        data={data.children}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        // onEndReached={handleOnEndReached}
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
