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
      const { comments, idToIndex } = state;
      const commentIndex = idToIndex[id];

      if (commentIndex === undefined) return;

      const updatedComments = comments.slice();

      // Update the collapsedParent of the target comment
      const targetComment = comments[commentIndex];
      updatedComments[commentIndex] = {
        ...targetComment,
        collapsedParent: collapsed,
      };

      // Update the collapsed state of child comments
      for (let i = commentIndex + 1; i < comments.length; i++) {
        const comment = comments[i];

        // If the comment is not a descendant, break the loop
        if (!comment.ancestors.includes(id)) {
          break;
        }

        // Only update if the collapsed state has changed
        if (comment.collapsed !== collapsed) {
          updatedComments[i] = {
            ...comment,
            collapsed: collapsed,
          };
        }
      }

      return { comments: updatedComments };
    }),
}));
