import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

import { Icon } from '@libs';
import PressableOpacity from './PressableOpacity';
import { useStyles } from '@hooks';

const TouchableIconLabel = ({ color, icon, label, disabled, onPress }) => {
  const { defaultStyles } = useStyles();

  return (
    <PressableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.iconInfoContainer}
    >
      <Icon
        name={icon}
        color={color ?? defaultStyles.lbPrimary.color}
        size={14}
      />
      <Text
        style={[
          styles.infoText,
          color ?? defaultStyles.lbPrimary,
          defaultStyles.caption1,
        ]}
      >
        {label}
      </Text>
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
    paddingLeft: 4,
  },
});

export default TouchableIconLabel;
