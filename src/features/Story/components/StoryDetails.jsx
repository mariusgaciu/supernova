import React, { useCallback, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from 'react-native';

import { ActivityIndicator, RefreshControl } from '@components';
import StoryHeader from './StoryHeader';
import CommentItem from './CommentItem';
import { useFetchStoryDetails } from '../hooks/useFetchStoryDetails';
import { useStyles } from '@hooks';

function StoryDetails({ id }) {
  const { defaultStyles } = useStyles();

  const { data, isLoading, isRefreshing, isError, lastRefreshed, refresh } =
    useFetchStoryDetails({ id });

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderItem = useCallback(
    ({ item }) => (
      <View>
        <CommentItem
          nestedLevel={0}
          user={item.author}
          timestamp={item.created_at}
          nestedComments={item.children}
          comment={item.text}
        />
      </View>
    ),
    []
  );

  useEffect(() => {
    if (!isLoading && !!data) {
      // Use requestAnimationFrame to ensure the UI has updated
      InteractionManager.runAfterInteractions(() => {
        const finishedRendering = new Date();
        console.log('Screen has finished rendering:', finishedRendering);
        console.log(
          'It took',
          (finishedRendering.getTime() - finishedLoading.getTime()) / 1000,
          's to render the screen'
        );
      });
    }
  }, [isLoading, data]);

  let finishedLoading;
  if (!isLoading && !!data) {
    finishedLoading = new Date();
    console.log('Data is fetched:', finishedLoading);
  }

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
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={refresh} />
        }
        data={data?.children}
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
