import { useState } from 'react';
import { useQuery } from 'react-query';

import { getStory, getStoryDetails } from '../services/api';
import { useStoreComments } from '../services/store';
import { sortCommentsByOption } from '@utils';
import { set } from 'date-fns';

export const useFetchStoryDetails = ({ id }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());
  const { setComments } = useStoreComments();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['storyDetails', id],
    queryFn: () => Promise.all([getStoryDetails({ id }), getStory({ id })]),
    onSuccess: (data) => {
      return setComments(data.children);
    },
    select: (data) => {
      const [storyDetails, story] = data;

      if (storyDetails.children && storyDetails.children.length > 0) {
        // Sort the comments by user selected option.
        const sortedComments = sortCommentsByOption(
          story.kids,
          storyDetails.children
        );

        const flattenComments = (comments, depth = 0, ancestors = []) => {
          let flattened = [];

          for (const comment of comments) {
            const { children, ...rest } = comment;

            // Add the current ancestors to the comment
            flattened.push({
              ...rest,
              depth: depth,
              no_of_replies: children.length,
              collapsed: false,
              ancestors: [...ancestors], // Include ancestor IDs here
            });

            if (children && children.length > 0) {
              // Pass down the ancestor IDs, including the current comment's ID
              flattened = flattened.concat(
                flattenComments(children, depth + 1, [...ancestors, comment.id])
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
