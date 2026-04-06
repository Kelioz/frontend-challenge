import { TProps } from './types'
import styles from './NavigationButton.module.scss'
import clsx from 'clsx'
export function NavigationButton(props: TProps) {
  const textStyles = clsx(
    styles.root__text,
    props.selected && styles.root__textSelected
  )
  return (
    <div className={styles.root} {...props}>
      <span className={textStyles}>{props.title}</span>
    </div>
  )
}
