import React from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

import { useStyles } from '@hooks';

function HTMLRenderer({ content }) {
  const { defaultStyles } = useStyles();
  const { width } = useWindowDimensions();

  const tagsStyles = {
    body: {
      color: defaultStyles.lbPrimary.color,
      textAlign: 'justify',
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
