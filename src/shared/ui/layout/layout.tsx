import { Outlet } from 'react-router-dom'
import styles from './layout.module.scss'
import { Header } from '../Header/Header'

export function Layout() {
  return (
    <div>
      <Header />
      <div className={styles.root}>
        <Outlet />
      </div>
    </div>
  )
}
