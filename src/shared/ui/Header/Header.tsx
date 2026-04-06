import { NavigationButton } from '@/shared/ui/Button/NavigationButton'
import styles from './Header.module.scss'
export function Header() {
  return (
    <div className={styles.root}>
      <NavigationButton title='Все котики' />
      <NavigationButton title='Любимые котики' />
    </div>
  )
}
