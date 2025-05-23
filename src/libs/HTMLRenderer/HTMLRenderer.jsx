import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import RenderHTML from 'react-native-render-html';

import { useStyles } from '@hooks';

function HTMLRenderer({ content }) {
  const { defaultStyles } = useStyles();
  const { width } = useWindowDimensions();

  const tagsStyles = {
    body: {
      color: defaultStyles.textDefault.color,
    },
  };

  return (
    <RenderHTML
      contentWidth={width}
      source={{ html: content }}
      tagsStyles={tagsStyles}
    />
  );
}

export default HTMLRenderer;
