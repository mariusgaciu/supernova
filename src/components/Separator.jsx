import React from 'react';
import { View } from 'react-native';

import { useStyles } from '@hooks';

function Separator({ style, color, height = 2, width }) {
  const { defaultStyles } = useStyles();

  return (
    <View
      style={[
        style,
        !style?.backgroundColor && defaultStyles.bgSecondary,
        !!height && { height },
        !!width && { width },
        !!color && { backgroundColor: color },
      ]}
    />
  );
}

export default Separator;
