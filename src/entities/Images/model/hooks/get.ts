import { apiClient } from '@/shared/api/cats'
import { ImagesListSearchOrRandomParams } from '@/shared/api/cats/Api.schemas'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'

export function useGetCats(params?: ImagesListSearchOrRandomParams) {
  return useQuery({
    queryKey: ['cats'],
    queryFn: () => apiClient.imagesListSearchOrRandom(params),
    enabled: true,
  })
}

export function useInfiniteGetCats() {
  return useInfiniteQuery({
    queryKey: ['cats/infinite'],
    queryFn: ({ pageParam = 0 }) =>
      apiClient.imagesListSearchOrRandom({ limit: 30, page: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (Array.isArray(lastPage) && lastPage.length === 30) {
        return allPages.length
      }
      return undefined
    },
    enabled: true,
  })
}
