import { useState } from 'react';
import { useQuery } from 'react-query';

import { getStory, getStoryDetails } from '../services/api';
import { useStoreComments } from '../services/store';
import { sortCommentsByOption } from '@utils';
import { set } from 'date-fns';

export const useFetchStoryDetails = ({ id }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());
  const { setInitialComments } = useStoreComments();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['storyDetails', id],
    queryFn: () => Promise.all([getStoryDetails({ id }), getStory({ id })]),
    onSuccess: (data) => setInitialComments(data.children),
    select: (data) => {
      const [storyDetails, story] = data;

      if (storyDetails.children && storyDetails.children.length > 0) {
        // Sort the comments by user selected option.
        const sortedComments = sortCommentsByOption(
          story.kids,
          storyDetails.children
        );

        const flattenComments = (comments, depth = 0) => {
          let result = [];

          comments.forEach((comment) => {
            let newComment = { ...comment, depth };

            delete newComment.children;
            result.push(newComment);

            if (comment.children && comment.children.length > 0) {
              result = result.concat(
                flattenComments(comment.children, depth + 1)
              );
            }
          });
          return result;
        };

        const flattenedComments = flattenComments(sortedComments);

        return {
          ...storyDetails,
          children: flattenedComments,
          descendants: story.descendants,
        };
      } else {
        return {
          ...storyDetails,
          descendants: story.descendants,
        };
      }
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
