import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { ActivityIndicator, Separator, RefreshControl } from '@components';
import StoryHeader from './StoryHeader';
import CommentItem from './CommentItem';
import { useFetchStoryDetails } from '../hooks/useFetchStoryDetails';
import { useStyles } from '@hooks';
import { useStoreComments } from '../services/store';

function StoryDetails({ storyId }) {
  const { defaultStyles } = useStyles();
  const { data, isLoading, isRefreshing, isError, lastRefreshed, refresh } =
    useFetchStoryDetails({ storyId });

  const {
    comments,
    collapsedChildren,
    setComments,
    addCollapsedChildren,
    removeCollapsedChildren,
    cleanupCommentsState,
  } = useStoreComments();

  const _handleCollapseComments = useCallback(
    (commentId, startIndex, depth) => {
      let noOfChildren = 0;

      for (let i = startIndex + 1; i < comments[storyId].length; i++) {
        if (comments[storyId][i].depth <= depth) {
          // Break if we reach a comment with the same depth level
          break;
        }
        noOfChildren++;
      }

      const prevComments = [...comments[storyId]];
      const removedComments = prevComments.splice(startIndex + 1, noOfChildren);

      setComments(storyId, prevComments);
      addCollapsedChildren(commentId, removedComments);
    },
    [comments[storyId], setComments]
  );

  const _handleRestoreComments = useCallback(
    (commentId, startIndex) => {
      const restoredComments = collapsedChildren[commentId];
      if (!restoredComments) return;

      const prevComments = [...comments[storyId]];
      prevComments.splice(startIndex + 1, 0, ...restoredComments); // Insert them back
      setComments(storyId, prevComments);
      removeCollapsedChildren(commentId);
    },
    [comments[storyId], collapsedChildren, setComments]
  );

  useFocusEffect(
    useCallback(() => {
      return () => {
        cleanupCommentsState(storyId);
      };
    }, [])
  );

  const keyExtractor = useCallback(
    (item) => item.id.toString(),
    [_handleCollapseComments]
  );

  const renderItem = useCallback(
    ({ item, index }) => (
      <CommentItem
        index={index}
        id={item.id}
        depth={item.depth}
        user={item.author}
        timestamp={item.created_at}
        comment={item.text}
        totalChildren={item.totalChildren}
        onCollapse={_handleCollapseComments}
        onRestore={_handleRestoreComments}
      />
    ),
    [_handleCollapseComments]
  );

  if (isLoading) return <ActivityIndicator />;
  if (isError) return <Text style={[defaultStyles.lbError]}>ERROR</Text>;

  return (
    <View style={styles.mainContainer}>
      <FlatList
        initialNumToRender={10}
        windowSize={5}
        ListHeaderComponent={
          <StoryHeader
            url={data.url}
            title={data.title}
            user={data.author}
            body={data.text}
            noOfComments={data.descendants}
            timestamp={data.created_at_i}
            score={data.points}
            type={data.type}
          />
        }
        ListFooterComponent={
          <Separator
            style={[defaultStyles.bgSecondary, { marginBottom: 50 }]}
          />
        }
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
        data={comments[storyId]}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
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
