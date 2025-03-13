import React, { useRef, useState } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  LayoutAnimation,
  Pressable,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useStyles } from '@hooks';

import { BUTTON_LABELS, INPUT_PLACEHOLDERS } from '@config';
import { PressableOpacity } from '@components';
import { Icon } from '@libs';

// TODO:
// - Add relevance and recent filters

function SearchInput({ style }) {
  const { defaultStyles } = useStyles();

  const [text, setText] = useState('');
  const [isCancelVisible, setIsCancelVisible] = useState(false);
  const textInputRef = useRef(null);

  const tabBarHeight = useBottomTabBarHeight();
  const bottomPosition = useRef(new Animated.Value(0)).current;

  const handleOnFocus = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCancelVisible(true);
    Animated.timing(bottomPosition, {
      toValue: -tabBarHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleOnBlur = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsCancelVisible(false);
    Animated.timing(bottomPosition, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleOnChange = (textInput) => {
    setText(textInput);
    console.log(`Search Input: ${textInput.nativeEvent.text}`);
  };

  const handleOnSubmit = ({ nativeEvent }) => {
    console.log(`Searching for: ${nativeEvent.text}`);
  };

  const handleInputPress = () => {
    textInputRef.current?.focus();
  };

  const handleCancelPress = () => {
    textInputRef.current?.clear();
    textInputRef.current?.blur();
    console.log('Search cancelled.');
  };

  return (
    <Animated.View
      onLayout={(event) => console.log(event.nativeEvent.layout.height)}
      style={StyleSheet.compose(styles.mainContainer, {
        backgroundColor: defaultStyles.bgSecondary.backgroundColor,
        borderColor: defaultStyles.border.color,
        bottom: bottomPosition,
      })}
    >
      <Pressable
        style={StyleSheet.compose(styles.textInputWrapper, {
          backgroundColor: defaultStyles.bgPrimary.backgroundColor,
        })}
        onPress={handleInputPress}
      >
        <Icon name="search-fill" color={defaultStyles.textPlaceholder.color} />
        <TextInput
          ref={textInputRef}
          style={StyleSheet.compose(styles.textInput, {
            color: defaultStyles.textDefault.color,
          })}
          placeholderTextColor={defaultStyles.textDisabled.color}
          value={text}
          placeholder={INPUT_PLACEHOLDERS.SEARCH}
          onChange={handleOnChange}
          onSubmitEditing={handleOnSubmit}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </Pressable>
      {isCancelVisible && (
        <PressableOpacity onPress={handleCancelPress}>
          <Text
            style={StyleSheet.compose(styles.cancelButton, {
              color: defaultStyles.textSubdued.color,
            })}
          >
            {BUTTON_LABELS.CANCEL}
          </Text>
        </PressableOpacity>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    paddingHorizontal: 10,
    borderRadius: 40,
  },
  textInput: {
    flex: 1,
    marginLeft: 5,
  },
  cancelButton: {
    marginLeft: 10,
  },
});

export default SearchInput;
