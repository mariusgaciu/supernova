import { useState } from 'react';
import { useQuery } from 'react-query';

import { getStory, getStoryDetails } from '../services/api';
import { useStoreComments } from '../services/store';
import { sortCommentsByOption } from '@utils';
import { set } from 'date-fns';

export const useFetchStoryDetails = ({ id }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());
  const { createCommentStores } = useStoreComments();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['storyDetails', id],
    queryFn: () => Promise.all([getStoryDetails({ id }), getStory({ id })]),
    onSuccess: (data) => {
      return createCommentStores(data.mapped);
      // console.log(data.mapped);
    },
    select: (data) => {
      const [storyDetails, story] = data;

      if (storyDetails.children && storyDetails.children.length > 0) {
        // Sort the comments by user selected option.
        const sortedComments = sortCommentsByOption(
          story.kids,
          storyDetails.children
        );

        const flattenComments = (comments, depth = 0) => {
          const flattened = [];

          const processComment = (comment, depth) => {
            const { children = [], id, ...rest } = comment;
            let childrenIds = [];
            let directChildrenIds = [];
            const flattenedComments = [];

            // Process child comments recursively
            for (const child of children) {
              const { flattenedChildComments, descendantIds } = processComment(
                child,
                depth + 1
              );
              flattenedComments.push(...flattenedChildComments);
              childrenIds.push(...descendantIds);
              directChildrenIds.push(child.id); // Store only direct child ID
            }

            // Create the current comment object with collected children IDs
            const currentComment = {
              ...rest,
              id,
              depth,
              noOfReplies: children.length,
              collapsed: false,
              collapsedChildren: false,
              childrenIds, // All descendants' IDs
              directChildrenIds, // Only direct children IDs
            };

            // Return the current comment along with its flattened children and collected IDs
            return {
              flattenedChildComments: [currentComment, ...flattenedComments],
              descendantIds: [id, ...childrenIds],
            };
          };

          // Process each top-level comment
          for (const comment of comments) {
            const { flattenedChildComments } = processComment(comment, depth);
            flattened.push(...flattenedChildComments);
          }

          return flattened;
        };

        const flattenedComments = flattenComments(sortedComments);

        const commentMap = flattenedComments.reduce((map, comment) => {
          map[comment.id] = comment;
          return map;
        }, {});

        return {
          ...storyDetails,
          children: flattenedComments,
          mapped: commentMap,
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
