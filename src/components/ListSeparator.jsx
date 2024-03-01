import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useStyles } from '@hooks';

function ListSeparator() {
  const { defaultStyles } = useStyles();

  return <View style={[styles.mainContainer, defaultStyles.bgSecondary]} />;
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 2,
    marginHorizontal: 16,
  },
});

export default ListSeparator;
