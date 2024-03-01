import React from 'react';
import { StyleSheet, View } from 'react-native';

import { StoryList } from '@features/Story';

function FeedScreen({ route }) {
  const storyType = route.params.storyType;

  return (
    <View style={styles.mainContainer}>
      <StoryList storyType={storyType} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
  },
});

export default FeedScreen;
