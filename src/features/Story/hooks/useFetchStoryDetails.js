import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getStory, getStoryDetails } from '../services/api';
import { useStoreComments } from '../services/store';

export const useFetchStoryDetails = ({ storyId }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());
  const { setInitialComments, setComments } = useStoreComments();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['storyDetails', storyId],
    // keepPreviousData: false,
    queryFn: () =>
      Promise.all([getStoryDetails({ storyId }), getStory({ storyId })]),
    onSuccess: (data) => {
      setInitialComments(storyId, data.children);
      setComments(storyId, data.children);
    },
    select: (data) => {
      const [storyDetails, story] = data;
      function parseAndFlattenCommentsWithTotalChildren(comments, depth = 0) {
        return comments.reduce((acc, comment) => {
          const newComment = { ...comment, depth };

          if (Array.isArray(comment.children) && comment.children.length > 0) {
            const flattenedChildren = parseAndFlattenCommentsWithTotalChildren(
              comment.children,
              depth + 1
            );
            newComment.totalChildren = flattenedChildren.length;
            acc.push(newComment, ...flattenedChildren);
          } else {
            newComment.totalChildren = 0;
            acc.push(newComment);
          }

          return acc;
        }, []);
      }

      const flatten = parseAndFlattenCommentsWithTotalChildren(
        storyDetails.children
      );

      return {
        ...storyDetails,
        children: flatten,
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
