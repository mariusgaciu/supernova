import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useStyles } from '@hooks';

function Separator({ style, height }) {
  const { defaultStyles } = useStyles();

  return (
    <View
      style={[
        style,
        styles.mainContainer,
        !style?.backgroundColor && defaultStyles.bgSecondary,
        !!height && { height },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 2,
  },
});

export default Separator;
