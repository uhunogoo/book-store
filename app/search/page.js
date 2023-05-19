import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <BreadCrumbs array={[ 'Пошук' ]} style={{ marginBottom: '2rem' }}/>
      
      <h1>Search</h1>
    </main>
  )
}