import React, { useRef } from 'react';
import { Pressable, Animated } from 'react-native';

function PressableOpacity({
  style,
  onPress,
  onLayout,
  disabled,
  isHitSlop,
  children,
}) {
  const opacity = useRef(new Animated.Value(1)).current;

  const RECTANGLE = {
    bottom: 10,
    left: null,
    right: null,
    top: 10,
  };

  const handlePressIn = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Pressable
      onLayout={onLayout}
      hitSlop={!!isHitSlop && RECTANGLE}
      style={style}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      <Animated.View style={[{ opacity }, style]}>{children}</Animated.View>
    </Pressable>
  );
}

export default PressableOpacity;
