import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView as NativeKeyboardAvoidingView,
  Platform,
  useWindowDimensions,
} from 'react-native';

//https://github.com/th3rdwave/react-native-safe-area-context/issues/153#issuecomment-999551324
function KeyboardAvoidingView({ children, style }) {
  const [viewHeight, setViewHeight] = useState(0);

  const dimensions = useWindowDimensions();

  const handleMainLayout = (event) => {
    const { x, y, width, height } = event?.nativeEvent?.layout;
    setViewHeight(height);
  };

  return (
    <View
      style={StyleSheet.compose(style, {
        flex: 1,
      })}
      onLayout={handleMainLayout}
    >
      <NativeKeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled={true}
        keyboardVerticalOffset={dimensions.height - viewHeight}
      >
        {children}
      </NativeKeyboardAvoidingView>
    </View>
  );
}

export default KeyboardAvoidingView;
