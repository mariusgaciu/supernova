import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@hooks';
import { Icon } from '@libs';
function FeedScreen(props) {
  const { theme } = useTheme();

  return (
    <View style={styles.mainContainer}>
      <Text style={[theme.lbPrimary]}>FeedScreen</Text>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
});

export default FeedScreen;
