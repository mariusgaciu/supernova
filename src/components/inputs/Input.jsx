import React, { useRef, useState } from 'react';
import { StyleSheet, View, TextInput, Pressable, Text } from 'react-native';
import { Controller } from 'react-hook-form';

import { PressableOpacity } from '@components';
import { useStyles } from '@hooks';
import { Icon } from '@libs';

// TODO: Implement right hand icon for password visibility

function Input({
  isError = false,
  errorMessage = 'Input error.',
  control,
  name,
  icon = null,
  autoComplete = 'off',
  autoCapitalize = true,
  placeholder,
  secureTextEntry = false,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordNotVisible, setPasswordNotVisible] =
    useState(secureTextEntry);
  const { defaultStyles } = useStyles();
  const inputRef = useRef(null);

  const isPasswordInput = name.search(/password/i) !== -1;

  const handleFocus = () => {
    inputRef?.current.focus();
  };

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handlePasswordVisibility = () => {
    setPasswordNotVisible(!isPasswordNotVisible);
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <>
          <Pressable style={[styles.mainContainer]} onPress={handleFocus}>
            <View
              style={[
                styles.inputContainer,
                defaultStyles.border,
                isFocused && defaultStyles.borderFocus,
              ]}
            >
              {!!icon && <View style={styles.iconContainer}>{icon}</View>}
              <TextInput
                ref={inputRef}
                style={[
                  styles.textInput,
                  defaultStyles.textDefault,
                  defaultStyles.body,
                ]}
                autoComplete={autoComplete}
                autoCapitalize={autoCapitalize}
                placeholderTextColor={defaultStyles.textPlaceholder.color}
                placeholder={placeholder}
                secureTextEntry={isPasswordNotVisible}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChangeText={onChange}
                value={value}
              />
              {isPasswordInput && (
                <PressableOpacity
                  style={styles.passwordIconContainer}
                  onPress={handlePasswordVisibility}
                >
                  <Icon
                    name={
                      isPasswordNotVisible ? 'eye-outline' : 'eye-off-outline'
                    }
                    color={defaultStyles.textPlaceholder.color}
                  />
                </PressableOpacity>
              )}
            </View>
          </Pressable>
          {isError && (
            <Text
              style={[
                styles.textError,
                defaultStyles.textError,
                defaultStyles.caption1,
              ]}
            >
              {errorMessage}
            </Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    // padding: 4,
    // borderRadius: 10,
  },
  focusedBorder: {
    padding: 2,
    borderWidth: 2,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 2,
  },
  textInput: {
    flex: 1,
  },
  textError: {
    marginTop: 2,
    marginLeft: 6,
  },
  iconContainer: {
    paddingRight: 10,
  },
  passwordIconContainer: {
    paddingLeft: 10,
  },
});

export default Input;
