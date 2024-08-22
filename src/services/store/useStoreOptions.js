import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useStoreOptions = create(
  persist(
    (set) => ({
      options: {
        commentSorting: 'newest',
      },
      setCommentSorting: (sortingOption) =>
        set((state) => ({
          options: {
            ...state.options,
            commentSorting: sortingOption,
          },
        })),
    }),
    {
      name: 'options',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
