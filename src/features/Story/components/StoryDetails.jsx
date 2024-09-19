import React, { useCallback, useState, useMemo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { CONFIG } from '@config';
import { ActivityIndicator, Separator, RefreshControl } from '@components';
import StoryHeader from './StoryHeader';
import CommentItem from './CommentItem';
import { useFetchStoryDetails } from '../hooks/useFetchStoryDetails';
import { useStyles } from '@hooks';
import { useStoreComments } from '../services/store';

function StoryDetails({ id }) {
  const [visibleComments, setVisibleComments] = useState(
    CONFIG.COMMENTS_PER_LOAD
  );
  const { comments } = useStoreComments();
  // console.log('COMM ', comments);
  console.log('________');

  const { defaultStyles } = useStyles();

  const { data, isLoading, isRefreshing, isError, lastRefreshed, refresh } =
    useFetchStoryDetails({ id });

  const visibleItems = useMemo(() => {
    return comments
      .filter((comment) => !comment.collapsed)
      .slice(0, visibleComments);
  }, [comments, visibleComments]);

  const totalVisibleComments = useMemo(() => {
    return comments.filter((comment) => comment.visible).length;
  }, [comments]);

  const isEndReached = visibleItems.length >= totalVisibleComments;

  const handleOnEndReached = useCallback(() => {
    setVisibleComments((prev) => prev + CONFIG.COMMENTS_PER_LOAD);
  }, []);

  const windowSize = visibleItems?.length >= 50 ? visibleItems.length / 4 : 50;

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <View>
        <CommentItem
          ancestors={item.ancestors}
          id={item.id}
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
        // initialNumToRender={100}
        // removeClippedSubviews={true}
        decelerationRate="fast"
        // estimatedItemSize={110}
        // windowSize={windowSize}
        // initialNumToRender={10}
        // maxToRenderPerBatch={windowSize}
        // updateCellsBatchingPeriod={25}
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
