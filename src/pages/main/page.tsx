import React, { useEffect, useRef } from 'react'
import { useInfiniteGetCats } from '@/entities/Images/model/hooks'
import styles from './page.module.scss'
import { ImageCard } from '@/shared/ui/ImageCard/ImageCard'
import { ImageItem } from '@/shared/api/cats/Api.schemas'
import { useFavorites } from '@/shared/utils/hooks/favorite'

export default function MainPage() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteGetCats()
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  const cats = data?.pages.flatMap((page) => page) || []
  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    )

    observer.observe(loadMoreRef.current)

    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  const handleLikeClick = (cat: ImageItem) => {
    if (isFavorite(cat.id)) {
      removeFavorite(cat.id)
    } else {
      addFavorite({
        id: cat.id,
        url: cat.url,
        width: cat.width,
        height: cat.height,
      })
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.root__imageContainer}>
        {cats.map((cat) => (
          <ImageCard
            key={cat.id}
            src={cat.url}
            width={cat.width}
            height={cat.height}
            alt='Cat'
            isFavorite={isFavorite(cat.id)}
            onLikeClick={() => handleLikeClick(cat)}
          />
        ))}
      </div>
      <div ref={loadMoreRef} className={styles.root__loadMore}>
        {isFetchingNextPage && <p>... загружаем еще котиков ...</p>}
      </div>
    </div>
  )
}
