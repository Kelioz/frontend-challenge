export type TError = {
  message?: string
  title: string
  info?: string
  code?: string
}
export type TAxiosErrorResponse = {
  error: TError
}
