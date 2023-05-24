import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <BreadCrumbs style={{ marginBottom: '2rem' }}>
        <BreadCrumbs.Crumb>
          Новини
        </BreadCrumbs.Crumb>
      </BreadCrumbs>

      <h1>Новини</h1>
    </main>
  )
}