import { create } from 'zustand';

export const useStoreComments = create((set) => ({
  comments: [],
  initialComments: [],
  commentsDepthMap: {},
  setComments: (comments) => set(() => ({ comments })),
  setInitialComments: (initialComments) =>
    set(() => ({ initialComments, comments: initialComments })),
  setCommentsDepthMap: (commentsDepthMap) => set(() => ({ commentsDepthMap })),
}));
