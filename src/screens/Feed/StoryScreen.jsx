import React from 'react';

import { StoryDetails } from '@features/Story';

function StoryScreen({ route }) {
  const storyId = route.params.storyId;

  return <StoryDetails storyId={storyId} />;
}

export default StoryScreen;
