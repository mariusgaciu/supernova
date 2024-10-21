import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { useStoreComments } from '../services/store';
import { ActivityIndicator, Separator, RefreshControl } from '@components';
import StoryHeader from './StoryHeader';
import CommentItem from './CommentItem';
import { useFetchStoryDetails } from '../hooks/useFetchStoryDetails';
import { useStyles } from '@hooks';

function StoryDetails({ id }) {
  const { defaultStyles } = useStyles();
  const { comments, initialComments, setComments } = useStoreComments();

  const [collapsedComments, setCollapsedComments] = useState({});

  const { data, isLoading, isRefreshing, isError, lastRefreshed, refresh } =
    useFetchStoryDetails({ id });

  const toggleCollapse = useCallback((commentId) => {
    setCollapsedComments((prev) => {
      const newCollapsed = { ...prev };
      newCollapsed[commentId] = !newCollapsed[commentId];
      return newCollapsed;
    });
  }, []);

  const updateVisibleComments = useCallback(() => {
    let visible = [];
    let depthStack = []; // This will store the id of the collapsed comments at each depth level

    for (let comment of initialComments) {
      // If we have a comment collapsed at this depth or higher, skip this comment
      if (
        depthStack.length > 0 &&
        comment.depth > depthStack[depthStack.length - 1].depth
      ) {
        continue;
      }

      visible.push(comment);

      // If the comment is collapsed, add it to the stack
      if (collapsedComments[comment.id]) {
        depthStack.push(comment);
      } else {
        // If we are back to a higher level comment, remove from the stack
        while (
          depthStack.length > 0 &&
          depthStack[depthStack.length - 1].depth >= comment.depth
        ) {
          depthStack.pop();
        }
      }
    }

    setComments(visible);
  }, [collapsedComments]);

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <CommentItem
        id={item.id}
        depth={item.depth}
        user={item.author}
        timestamp={item.created_at}
        comment={item.text}
        isCollapsed={!!collapsedComments[item.id]}
        onToggleCollapse={toggleCollapse}
      />
    ),
    [toggleCollapse, collapsedComments]
  );

  useEffect(() => {
    updateVisibleComments();
  }, [collapsedComments, updateVisibleComments]);

  const memoizedVisibleComments = useMemo(() => comments, [comments]);

  if (isLoading) return <ActivityIndicator />;

  if (isError) return <Text style={[defaultStyles.lbError]}>ERROR</Text>;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        updateCellsBatchingPeriod={50}
        windowSize={21}
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
        data={memoizedVisibleComments}
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
