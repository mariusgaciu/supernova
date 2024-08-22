import React from 'react';

import { StoryDetails } from '@features/Story';

function StoryScreen({ route }) {
  const id = route.params.id;

  return <StoryDetails id={id} />;
}

export default StoryScreen;
