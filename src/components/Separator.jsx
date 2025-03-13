import React from 'react';
import { View } from 'react-native';

import { useStyles } from '@hooks';

function Separator({ style, color, height = 2, width }) {
  const { defaultStyles } = useStyles();

  return (
    <View
      style={[
        !!height && { height },
        !!width && { width },
        !!color && { backgroundColor: color },
        style,
      ]}
    />
  );
}

export default Separator;
