import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { useStyles } from '@hooks';
import PressableOpacity from './PressableOpacity';
import { Icon } from '@libs';

/**
 * @param { Object } props
 * @param { Object } props.style - Style the label of the button
 * @param { String } props.color - The color of the button.
 * @param { String } props.labelColor - The color of the button label.
 * @param { 'link' | 'label' | 'icon-label' | 'icon' } props.variant - The type of button.
 * @param { 'small' | 'medium' | 'large' } props.size - The size of the button.
 * @param { String } props.label - The button label.
 * @param { Boolean } props.disabled - Disable the onPress.
 * @param { Function } props.onPress - Callback function for button press.
 */

function Button({
  styleText,
  color,
  labelColor,
  variant = 'label',
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

  const handleLayout = (event) => {
    const height = event.nativeEvent.layout.height;

    if (height < 40) {
      setHitSlop(true);
    }
  };

  return (
    <PressableOpacity
      onLayout={handleLayout}
      onPress={onPress}
      isHitSlop={isHitSlop}
      disabled={disabled}
    >
      <View style={styles.containerIconLabel}>
        {(variant === 'icon-label' || variant === 'icon') && (
          <Icon
            name={icon}
            color={!!labelColor && labelColor}
            size={sizeIcon}
          />
        )}
        <Text
          style={[
            styleText,
            variant === 'icon' ? styles.labelWithoutIcon : styles.Label,
            variant === 'link'
              ? styles.variantLink
              : variant === 'label'
              ? styles.variantLabel
              : variant === 'icon-label' && styles.variantIconLabel,
            size === 'small'
              ? defaultStyles.footer
              : size === 'medium'
              ? defaultStyles.subheader
              : size === 'large' && defaultStyles.body,
            !!labelColor && { color: labelColor },
          ]}
        >
          {variant !== 'icon' && label}
        </Text>
      </View>
    </PressableOpacity>
  );
}

const styles = StyleSheet.create({
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
