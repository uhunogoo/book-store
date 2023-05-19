import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <BreadCrumbs array={[ {text: 'Привілеї', src: '/advantages'} ]} style={{ marginBottom: '2rem' }}/>
      <h1>Переваги</h1>
    </main>
  )
}