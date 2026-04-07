import { FavoriteIcon } from '@/shared/icons/FavoriteIcon'
import { TProps } from './types'
import { FavoriteOutfilledIcon } from '@/shared/icons/FavoriteOutfilled'
import styles from './ImageCard.module.scss'
import { useState } from 'react'

export function ImageCard(props: TProps) {
  const [hasError, setHasError] = useState(false)

  return (
    <div className={styles.root}>
      {hasError ? (
        <div
          style={{
            width: 225,
            height: 225,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Этот котик ещё не проснулся&#40;
        </div>
      ) : (
        <img
          {...props}
          width={225}
          height={225}
          onError={() => setHasError(true)}
          className={styles.root__image}
        />
      )}
      <div className={styles.root__favorite} onClick={props.onLikeClick}>
        {props.isFavorite ? (
          <FavoriteIcon className={styles.root__icon} />
        ) : (
          <FavoriteOutfilledIcon />
        )}
      </div>
    </div>
  )
}
