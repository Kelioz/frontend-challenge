export type TProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  onLikeClick?: () => void
  isFavorite?: boolean
}
