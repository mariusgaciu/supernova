import React from 'react';
import { Pressable } from 'react-native';

function PressableHighlight({ style, underlayColor, children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        style,
        pressed && { backgroundColor: underlayColor },
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
}

export default PressableHighlight;
