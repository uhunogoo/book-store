import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import styles from './page.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
    <BreadCrumbs array={[ {text: 'Серії', src: '/series'} ]} style={{ marginBottom: '2rem' }}/>

      <h1>Серії</h1>
    </main>
  )
}