import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useStyles } from '@hooks';
import { Icon } from '@libs';
import { PressableHighlight } from '@components';
import { PressableOpacity } from '@components';
// import { PressableHighlight, PressableOpacity } from '@components';

/**
 * @param { Object } props
 * @param { Object } props.style - Style the label of the button
 * @param { String } props.color - The color of the button.
 * @param { String } props.underlayColor - The color of the button when pressed.
 * @param { String } props.labelColor - The color of the button label.
 * @param { 'button' | 'link' | 'label' | 'icon-label' | 'icon' } props.variant - The type of button.
 * @param { 'small' | 'medium' | 'large' } props.size - The size of the button.
 * @param { String } props.label - The button label.
 * @param { Boolean } props.disabled - Disable the onPress.
 * @param { Function } props.onPress - Callback function for button press.
 */

function Button({
  styleText,
  color,
  underlayColor,
  labelColor,
  disabledLabelColor,
  variant = 'button',
  size = 'medium',
  label = 'Button',
  icon = 'dice-outline',
  disabled = false,
  onPress = () => console.log('Button Pressed'),
}) {
  const { defaultStyles } = useStyles();

  const [isHitSlop, setHitSlop] = useState(false);

  const sizeIcon =
    size === 'small'
      ? defaultStyles.body.fontSize
      : size === 'medium'
      ? defaultStyles.title3.fontSize
      : size === 'large' && defaultStyles.title2.fontSize;

  const Pressable =
    variant === 'icon' ||
    variant === 'icon-label' ||
    variant === 'label' ||
    variant === 'link'
      ? PressableOpacity
      : PressableHighlight;

  const handleLayout = (event) => {
    const height = event.nativeEvent.layout.height;

    if (height < 40) {
      setHitSlop(true);
    }
  };

  return (
    <Pressable
      style={
        variant === 'button' && [
          styles.mainContainer,
          { backgroundColor: color },
        ]
      }
      underlayColor={underlayColor}
      onLayout={handleLayout}
      onPress={onPress}
      isHitSlop={isHitSlop}
      disabled={disabled}
    >
      <View style={styles.containerIconLabel}>
        {(variant === 'icon-label' || variant === 'icon') && (
          <Icon
            name={icon}
            color={
              disabled && !!disabledLabelColor
                ? disabledLabelColor
                : !!labelColor && labelColor
            }
            size={sizeIcon}
          />
        )}
        <Text
          style={[
            styleText,
            defaultStyles.lbPrimary,
            variant === 'icon' ? styles.labelWithoutIcon : styles.Label,
            variant === 'link'
              ? styles.variantLink
              : variant === 'label'
              ? styles.variantLabel
              : variant === 'icon-label' && styles.variantIconLabel,
            size === 'small'
              ? variant === 'button'
                ? defaultStyles.footerB
                : defaultStyles.footer
              : size === 'medium'
              ? variant === 'button'
                ? defaultStyles.subheaderB
                : defaultStyles.subheader
              : size === 'large' && variant === 'button'
              ? defaultStyles.bodyB
              : defaultStyles.body,
            disabled && !!disabledLabelColor
              ? { color: disabledLabelColor }
              : !!labelColor && { color: labelColor },
          ]}
        >
          {variant !== 'icon' && label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  containerIconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  Label: {
    paddingHorizontal: 4,
  },
  labelWithoutIcon: {
    paddingHorizontal: 2,
  },
  variantLink: {
    marginBottom: -3,
    textDecorationLine: 'underline',
  },
  variantLabel: {
    marginBottom: -3,
  },
  variantIconLabel: {},
  variantIcon: {},
});

export default Button;
