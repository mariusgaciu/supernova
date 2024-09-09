import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStoreOptions = create(
  persist(
    (set) => ({
      options: {
        commentSorting: 'default', // 'default' | 'newest' | 'oldest'
        openLinkWith: true, // 'browser' === true | 'inApp' === false
      },
      setCommentSorting: (sortingOption) =>
        set((state) => ({
          options: {
            ...state.options,
            commentSorting: sortingOption,
          },
        })),
      setOpenLinkWith: (openLinkWith) =>
        set((state) => ({
          options: {
            ...state.options,
            openLinkWith: openLinkWith,
          },
        })),
    }),
    {
      name: 'options',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
