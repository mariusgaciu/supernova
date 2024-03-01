import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator as NativeActivityIndicator,
} from 'react-native';

import { useStyles } from '@hooks';

/**
 * Custom ActivityIndicator component for displaying a loading spinner.
 * @param {Object} props - The component props.
 * @param {'small' | 'large'} props.size - Optional. Size of the spinner, defaults to 'large'.
 * @param {string} props.color - Optional. Color of the spinner.
 * @param {boolean} props.isEndReached - Determines if the spinner should be displayed. If true, the spinner is not rendered.
 */

function ActivityIndicator({ size = 'large', color, isEndReached }) {
  const { defaultStyles } = useStyles();

  if (isEndReached) return null;

  return (
    <NativeActivityIndicator
      style={[
        internalStyles.mainContainer,
        size === 'small' && internalStyles.smallIndicator,
      ]}
      animating={true}
      hidesWhenStopped={true}
      color={color ?? defaultStyles.secondary.color}
      size={size}
    />
  );
}

const internalStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  smallIndicator: {
    marginVertical: 30,
  },
});

export default ActivityIndicator;
