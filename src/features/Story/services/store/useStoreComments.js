import { create } from 'zustand';

export const useStoreComments = create((set) => ({
  comments: [],
  idToIndex: {},
  setComments: (comments) => {
    const idToIndex = {};
    comments.forEach((comment, index) => {
      idToIndex[comment.id] = index;
    });
    set(() => ({ comments, idToIndex }));
  },
  setCommentCollapsed: (id, collapsed) =>
    set((state) => {
      const startDate = new Date();
      const { comments, idToIndex } = state;
      const commentIndex = idToIndex[id];

      if (commentIndex === undefined) return;

      const updatedComments = [...state.comments];

      // Start iterating only after the comment with the matching id
      for (let i = commentIndex + 1; i < comments.length; i++) {
        const comment = comments[i];

        const isVisible = comment.ancestors.some(
          (ancestorId) => ancestorId === id
        );

        if (!isVisible) {
          // Stop iterating once we hit a comment that doesn't have the id in ancestors
          break;
        }

        updatedComments[i] = {
          ...comment,
          collapsed: collapsed ? isVisible : !isVisible,
        };
      }

      const endDate = new Date();
      const timeDiff = endDate - startDate;
      console.log(startDate, endDate, 'Time taken:', timeDiff, 'ms');

      return { comments: updatedComments };
    }),
}));
