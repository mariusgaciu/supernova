import React from 'react';
import { RefreshControl as NativeRefreshControl } from 'react-native';

import { useStyles } from '@hooks';

function RefreshControl({ refreshing, onRefresh, tintColor, colors }) {
  const { defaultStyles } = useStyles();

  return (
    <NativeRefreshControl
      tintColor={tintColor ?? defaultStyles.secondary.color} // iOS
      colors={colors ?? [defaultStyles.secondary.color]} // android
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
}

export default RefreshControl;
