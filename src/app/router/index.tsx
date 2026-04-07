import FavoritePage from '@/pages/favorites/page'
import MainPage from '@/pages/main/page'
import { Layout } from '@/shared/ui/layout/layout'
import { Route, Routes } from 'react-router-dom'
export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<MainPage />} path='' />
        <Route element={<FavoritePage />} path='/favorites' />
      </Route>
    </Routes>
  )
}
