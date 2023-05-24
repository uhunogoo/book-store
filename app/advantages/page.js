import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <BreadCrumbs style={{ marginBottom: '2rem' }}>
        <BreadCrumbs.Crumb>
          Привілеї
        </BreadCrumbs.Crumb>
      </BreadCrumbs>
      
      <h1>Переваги</h1>
    </main>
  )
}