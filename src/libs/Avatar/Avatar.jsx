import React from 'react';
import Avatar from '@ukashu/boring-avatars-react-native';

import { useStyles } from '@hooks';

function CustomAvatar({ name, size }) {
  const { defaultStyles } = useStyles();

  return (
    <Avatar
      name={name}
      variant="beam"
      size={size}
      colors={defaultStyles.avatar}
    />
  );
}

export { CustomAvatar as Avatar };
