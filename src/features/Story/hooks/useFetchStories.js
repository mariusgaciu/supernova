import { useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

import { getStory, getStories } from '../services/api';

export const useFetchStories = ({ storyType }) => {
  const [isRefetching, setIsRefetching] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());

  const itemsPerScroll = 10;

  const {
    data: dataIds,
    isLoading: isLoadingIds,
    isFetching: isFetchingIds,
    isError: isErrorIds,
    refetch: refetchIds,
  } = useQuery({
    queryKey: ['storyIds', storyType],
    queryFn: () => getStories({ storyType }),
  });

  const {
    data: dataStories,
    isLoading: isLoadingStories,
    isRefetching: isRefetchingStories,
    isError: isErrorStories,
    isSuccess,
    hasNextPage: hasMoreItems,
    fetchNextPage: loadMoreItems,
    refetch: refetchStories,
  } = useInfiniteQuery({
    queryKey: ['stories', storyType],
    queryFn: async ({ pageParam = 0 }) => {
      const idsToFetch = dataIds?.slice(pageParam, pageParam + itemsPerScroll);
      const stories = await Promise.all(
        idsToFetch.map((id) => getStory({ id }))
      );
      return stories;
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPageParam = allPages.length * itemsPerScroll;
      return nextPageParam < dataIds.length ? nextPageParam : undefined;
    },
    enabled: dataIds?.length > 0,
  });

  const refresh = async () => {
    setIsRefetching(true);
    await refetchIds();
    await refetchStories();
    setIsRefetching(false);
    setLastRefreshed(Date.now());
  };

  const isLoading = isLoadingIds || isLoadingStories;
  const isRefreshing =
    !isLoadingStories && isFetchingIds && isRefetchingStories && isRefetching;
  const isError = isErrorIds || isErrorStories;
  const data = dataStories?.pages.flat();

  return {
    data,
    isLoading,
    isRefreshing,
    isError,
    isSuccess,
    hasMoreItems,
    lastRefreshed,
    loadMoreItems,
    refresh,
  };
};
