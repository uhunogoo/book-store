import styles from './page.module.css'

export default function DashboardLayout({ children }) {
  return (
    <section>
      <h1>Особистий кабінет</h1>
      <div className={ styles.content }>
        <aside>
          <nav>
          <ul>
            <li>
              Профіль
            </li>
            <li>
              Клубна Картка
            </li>
            <li>
              Мої замовлення
            </li>
            <li>
              Побажання
            </li>
            <li>
              Кошик
            </li>
            <li>
              Пароль
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