import { create } from 'zustand';

export const useStoreComments = create((set) => ({
  initialComments: [],
  comments: {},
  collapsedComments: {},
  collapsedChildren: {},
  setInitialComments: (id, initialComments) =>
    set((state) => ({
      initialComments: { ...state.initialComments, [id]: initialComments },
    })),
  setComments: (id, comments) =>
    set((state) => ({ comments: { ...state.comments, [id]: comments } })),
  addCollapsedComment: (id) =>
    set((state) => ({
      collapsedComments: { ...state.collapsedComments, [id]: true },
    })),
  removeCollapsedComment: (id) => {
    set((state) => {
      const updatedComments = { ...state.collapsedComments };
      delete updatedComments[id];
      return { collapsedComments: updatedComments };
    });
  },
  addCollapsedChildren: (id, removedComments) =>
    set((state) => ({
      collapsedChildren: { ...state.collapsedChildren, [id]: removedComments },
    })),
  removeCollapsedChildren: (id) => {
    set((state) => {
      const updatedCollapsedChildren = { ...state.collapsedChildren };
      delete updatedCollapsedChildren[id];
      return { collapsedChildren: updatedCollapsedChildren };
    });
  },
  cleanupCommentsState: (id) =>
    set((state) => ({
      comments: { ...state.comments, [id]: state.initialComments[id] },
      collapsedComments: {},
      collapsedChildren: {},
    })),
}));
