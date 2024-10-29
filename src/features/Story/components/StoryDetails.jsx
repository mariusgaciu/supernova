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
  const {
    comments,
    initialComments,
    commentsDepthMap: commentDepthMap,
    setComments,
  } = useStoreComments();
  const [collapsedComments, setCollapsedComments] = useState({});
  const { data, isLoading, isRefreshing, isError, lastRefreshed, refresh } =
    useFetchStoryDetails({ id });

  const toggleCollapseAndUpdateComments = useCallback(
    (commentId) => {
      setCollapsedComments((prev) => {
        const newCollapsed = { ...prev };
        newCollapsed[commentId] = !newCollapsed[commentId];

        // Find the target comment's depth
        const targetDepth = commentDepthMap[commentId];

        // Start from the comment's index
        const targetIndex = initialComments.findIndex(
          (c) => c.id === commentId
        );
        const visible = initialComments.slice(0, targetIndex + 1);

        // Process only comments after the toggled comment
        let isSkipping = newCollapsed[commentId];
        let skipUntilDepth = targetDepth;

        for (let i = targetIndex + 1; i < initialComments.length; i++) {
          const comment = initialComments[i];

          if (comment.depth <= targetDepth) {
            isSkipping = false;
            skipUntilDepth = -1;
          }

          if (!isSkipping) {
            if (newCollapsed[comment.id]) {
              isSkipping = true;
              skipUntilDepth = comment.depth;
            }
            visible.push(comment);
          } else if (comment.depth <= skipUntilDepth) {
            isSkipping = false;
            skipUntilDepth = -1;
            visible.push(comment);
          }
        }

        setComments(visible);
        return newCollapsed;
      });
    },
    [initialComments, setComments, commentDepthMap]
  );

  // Rest of the component remains the same...
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
        onToggleCollapse={toggleCollapseAndUpdateComments}
      />
    ),
    [toggleCollapseAndUpdateComments, collapsedComments]
  );

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
