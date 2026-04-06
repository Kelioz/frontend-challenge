import { Config } from '../../config'
import axios, { AxiosRequestConfig } from 'axios'
import * as Api from './Api'
export const AXIOS_INSTANCE = axios.create({
  baseURL: Config.API_URL,
})
export const customInstance = <T>(
  config: AxiosRequestConfig,

  options?: AxiosRequestConfig
): Promise<T> => {
  const source = axios.CancelToken.source()

  const promise = AXIOS_INSTANCE({
    ...config,

    ...options,

    cancelToken: source.token,
  }).then(({ data }) => data)

  // @ts-expect-error any
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }

  return promise
}
AXIOS_INSTANCE.defaults.headers.common['x-api-key'] = Config.X_API_KEY

export const apiClient = Api
