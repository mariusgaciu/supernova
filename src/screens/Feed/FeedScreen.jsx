import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@hooks';
import { Icon } from '@libs';

function FeedScreen(props) {
  const { defaultStyles } = useTheme();

  return (
    <View style={styles.mainContainer}>
      <Text style={[defaultStyles.lbPrimary, defaultStyles.body]}>
        FeedScreen
      </Text>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default FeedScreen;
