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

      if (storyDetails.children && storyDetails.children.length > 0) {
        // Sort the comments by user selected option.
        const sortedComments = sortCommentsByOption(
          story.kids,
          storyDetails.children
        );

        const flattenComments = (comments, depth = 0) => {
          let flattened = [];

          for (const comment of comments) {
            const { children, ...rest } = comment;

            flattened.push({
              ...rest,
              depth: depth,
              no_of_replies: children.length,
            });

            if (children && children?.length > 0) {
              flattened = flattened.concat(
                flattenComments(children, depth + 1)
              );
            }
          }

          return flattened;
        };

        const flattenedComments = flattenComments(sortedComments);

        return {
          ...storyDetails,
          children: flattenedComments,
          descendants: story.descendants,
        };
      }

      return {
        ...storyDetails,
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
