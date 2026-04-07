import { ImageCard } from '@/shared/ui/ImageCard/ImageCard'
import styles from './page.module.scss'
import { useFavorites } from '@/shared/utils/hooks/favorite'

export default function FavoritePage() {
  const { favorites, removeFavorite } = useFavorites()

  return (
    <div className={styles.root}>
      <div className={styles.root__imageContainer}>
        {favorites.map((cat) => (
          <ImageCard
            key={cat.id}
            src={cat.url}
            width={cat.width}
            height={cat.height}
            alt='Cat'
            isFavorite={true}
            onLikeClick={() => removeFavorite(cat.id)}
          />
        ))}
        {favorites.length === 0 && <p>У вас пока нет любимых котиков :(</p>}
      </div>
    </div>
  )
}
