import { create } from 'zustand';

export const useStoreComments = create((set) => ({
  comments: [],
  initialComments: [],
  setComments: (comments) => set(() => ({ comments })),
  setInitialComments: (initialComments) =>
    set(() => ({ initialComments, comments: initialComments })),
}));
