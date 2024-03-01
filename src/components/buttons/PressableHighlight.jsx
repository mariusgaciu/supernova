import React from 'react';
import { Pressable } from 'react-native';

function PressableHighlight({ style, underlayColor, children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && underlayColor, style]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

export default PressableHighlight;
