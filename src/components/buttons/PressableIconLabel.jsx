import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Icon } from '@libs';
import PressableOpacity from './PressableOpacity';
import { useStyles } from '@hooks';

const PressableIconLabel = ({
  color,
  icon,
  label,
  size = 'small',
  disabled,
  onPress,
}) => {
  const { defaultStyles } = useStyles();

  const iconSize = size === 'small' ? 20 : size === 'large' && 24;
  const textSize =
    size === 'small'
      ? defaultStyles.caption1
      : size === 'large' && defaultStyles.footer;

  return (
    <PressableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.iconInfoContainer]}
    >
      <Icon
        name={icon}
        color={color?.color ?? defaultStyles.lbPrimary.color}
        size={iconSize}
      />
      {!!label && (
        <Text
          style={[styles.infoText, color ?? defaultStyles.lbPrimary, textSize]}
        >
          {label}
        </Text>
      )}
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  iconInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
  },
  infoText: {
    paddingHorizontal: 4,
  },
});

export default PressableIconLabel;
