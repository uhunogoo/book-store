import styles from './page.module.css'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import { rochester400 } from '@/fonts';
import { NavigationItem } from '@/components/Navigation/Navigation';


export default function DashboardLayout({ children }) {
  // const 
  return (
    <section className={rochester400.variable}>
      <BreadCrumbs style={{ marginBottom: '2rem' }}>
        <BreadCrumbs.Crumb>
          Особистий кабінет
        </BreadCrumbs.Crumb>
      </BreadCrumbs>
      
      <h1 style={{ color: 'var(--text-green)', margin: '2rem 0 2.5rem' }}>Особистий кабінет</h1>
      <div className={ styles.content }>
        <aside>
          <nav className={ styles.navigation }>
            <ul>
              <li>
                <NavigationItem chechLink link="/dashboard/profile" title="Профіль" />
              </li>
              <li>
                <NavigationItem chechLink link="/dashboard/club-card" title="Клубна Картка" />
              </li>
              <li>
                <NavigationItem chechLink link="/dashboard/orders" title="Мої замовлення" />
              </li>
              <li>
                <NavigationItem chechLink link="/dashboard/wishlist" title="Побажання" />
              </li>
              <li>
                <NavigationItem chechLink link="/dashboard/cart" title="Кошик" />
              </li>
              <li>
                <NavigationItem chechLink link="/dashboard/password" title="Пароль" />
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