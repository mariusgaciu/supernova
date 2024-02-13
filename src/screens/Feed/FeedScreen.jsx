import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Icon } from '@libs';
function FeedScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Text>FeedScreen</Text>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default FeedScreen;
