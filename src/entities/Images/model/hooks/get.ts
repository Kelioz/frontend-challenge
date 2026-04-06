import { apiClient } from '@/shared/api/cats'
import { ImagesListSearchOrRandomParams } from '@/shared/api/cats/Api.schemas'
import { useQuery } from '@tanstack/react-query'

export function useGetCats(params?: ImagesListSearchOrRandomParams) {
  return useQuery({
    queryKey: ['cats'],
    queryFn: () => apiClient.imagesListSearchOrRandom(params),
    enabled: true,
  })
}
