import { useState } from 'react';
import { useQuery } from 'react-query';

import { getStory, getStoryDetails } from '../services/api';
import { sortCommentsByOption } from '@utils';

export const useFetchStoryDetails = ({ id }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['storyDetails', id],
    queryFn: () => Promise.all([getStoryDetails({ id }), getStory({ id })]),
    select: (data) => {
      const [storyDetails, story] = data;

      // Sort the comments by HackerNews algorithm
      const sortedComments = sortCommentsByOption(
        story.kids,
        storyDetails.children
      );
      // Create pagination object
      // const comments = sortedComments.slice(0, 5);

      storyDetails.children = sortedComments;

      return {
        ...storyDetails,
        allComments: sortedComments,
        descendants: story.descendants,
      };
    },
  });

  const refresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
    setLastRefreshed(Date.now());
  };

  return {
    data,
    isLoading,
    isError,
    isRefreshing,
    lastRefreshed,
    refresh,
  };
};
