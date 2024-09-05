import React from 'react';

import { StoryList } from '@features/Story';

function FeedScreen({ route }) {
  const storyType = route.params.storyType;
  console.log('STORY TYPE', storyType);

  return <StoryList storyType={storyType} />;
}

export default FeedScreen;
