import { useState } from 'react'

export type FavoriteCat = {
  id: string
  url: string
  width: number
  height: number
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteCat[]>(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  const addFavorite = (cat: FavoriteCat) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === cat.id)) return prev
      const newFavorites = [...prev, cat]
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const removeFavorite = (id: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((cat) => cat.id !== id)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const isFavorite = (id: string) => favorites.some((cat) => cat.id === id)

  return { favorites, addFavorite, removeFavorite, isFavorite }
}
