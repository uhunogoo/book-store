import Link from 'next/link';
import styles from './page.module.css'
import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs';

export default function DashboardLayout({ children }) {
  return (
    <section>
      <BreadCrumbs array={[ 'Особистий кабінет' ]} style={{ marginBottom: '2rem' }}/>
      <h1 style={{ color: 'var(--text-green)', margin: '2rem 0 2.5rem' }}>Особистий кабінет</h1>
      <div className={ styles.content }>
        <aside>
          <nav className={ styles.navigation }>
            <ul>
              <li>
                <Link href="/dashboard/profile">Профіль</Link>
              </li>
              <li>
                <Link href="/dashboard/clubCard">Клубна Картка</Link>
              </li>
              <li>
                <Link href="/dashboard/orders">Мої замовлення</Link>
              </li>
              <li>
                <Link href="/dashboard/wishlist">Побажання</Link>
              </li>
              <li>
                <Link href="/dashboard/cart">Кошик</Link>
              </li>
              <li>
                <Link href="/dashboard/password">Пароль</Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        <div className={ styles.container }>
          {children}
        </div>
      </div>
    </section>
  );
}