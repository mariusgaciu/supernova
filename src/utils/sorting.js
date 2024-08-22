import { useStoreOptions } from '@services';

/**
 * Sorts comments based on the current sorting option set in the application state.
 * This function reads the sorting criteria from the store options and applies the specified
 * sorting algorithm to the array of unsorted comments.
 *
 * @param {Array} karmaOrder - An array of comment IDs ordered by their karma score.
 *                             Used when the sorting method is set to 'default'.
 * @param {Array} unsortedComments - An array of comment objects to be sorted. Each comment object
 *                                   must have an `id`, `created_at_i` attribute.
 *
 * @returns {Array} - The sorted array of comments. The sorting is performed based on the
 *                    `commentSorting` option which can be 'newest', 'oldest', or 'default'.
 *                    'newest' sorts comments by creation time in descending order,
 *                    'oldest' in ascending order, and 'default' according to the order of IDs in `karmaOrder`.
 *
 * @example
 * // Assuming the store has set 'newest' as the sorting option and comments are provided.
 * sortCommentsByOption(['123', '124'], [{ id: '123', created_at_i: 1000 }, { id: '124', created_at_i: 2000 }]);
 * // Returns [{ id: '124', created_at_i: 2000 }, { id: '123', created_at_i: 1000 }]
 */

export const sortCommentsByOption = (karmaOrder, unsortedComments) => {
  const { commentSorting } = useStoreOptions.getState().options;

  let sortedComments = [];

  switch (commentSorting) {
    case 'newest':
      // Create a shallow copy to avoid mutating the original array
      sortedComments = [...unsortedComments].sort(
        (a, b) => b.created_at_i - a.created_at_i
      );
      break;
    case 'oldest':
      // Create a shallow copy to avoid mutating the original array
      sortedComments = [...unsortedComments].sort(
        (a, b) => a.created_at_i - b.created_at_i
      );
      break;
    case 'default':
      // Create a shallow copy to avoid mutating the original array
      sortedComments = [...unsortedComments];
      const commentPositions = {};
      for (const [index, id] of karmaOrder.entries()) {
        commentPositions[id] = index;
      }
      sortedComments.sort(
        (a, b) => commentPositions[a.id] - commentPositions[b.id]
      );
      break;
  }

  return sortedComments;
};
