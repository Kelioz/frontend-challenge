import { NavigationButton } from '@/shared/ui/Button/NavigationButton'
import styles from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
export function Header() {
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  return (
    <div className={styles.root}>
      <NavigationButton
        title='Все котики'
        selected={path === '/'}
        onClick={() => navigate('/')}
      />
      <NavigationButton
        title='Любимые котики'
        selected={path === '/favorites'}
        onClick={() => navigate('/favorites')}
      />
    </div>
  )
}
