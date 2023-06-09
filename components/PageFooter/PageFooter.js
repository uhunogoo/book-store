import styles from './style.module.css';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import DecoratedBooks from '../DecoratedBooks/DecoratedBooks';
import { Facebook, Instagram, Pinterest, Twitter } from '../Icons/Icons';
import Link from 'next/link';

function PageFooter() {
  return (
    <>
      <DecoratedBooks style={{ marginTop: '5.25rem' }} />
      <footer style={{ backgroundColor: 'hsl(var(--background-green))' }}>
        <ContentWrapper main={false} className={styles.footer}>
          <div style={{ gridArea: 'column1' }}>
            <div className={ styles.title }>Спосіб доставки</div>
            <ul>
              <li>Нова Пошта</li>
              <li>Укрпошта</li>
              <li>Кур'єрська доставка</li>
              <li>Самовивіз</li>
            </ul>
          </div>
          <div style={{ gridArea: 'column2' }}>
            <div className={ styles.title }>Допомога?</div>
            <ul>
              <li><Link href="/delivery">Доставка, оплата</Link></li>
              <li>Правила Клубу</li>
              <li><Link href="/dashboard/club-card">Клубна картка</Link></li>
              <li>Повернення товару</li>
            </ul>
          </div>
          <div style={{ gridArea: 'column3' }}>
            <div className={ styles.title }>Про Клуб</div>
            <ul>
              <li>Наші магазини</li>
              <li>Істория Клубу</li>
              <li>Видавництво</li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div style={{ gridArea: 'column4' }}>
            <div className={ styles.title }>Контакти</div>
            <ul>
              <li>Адреса:  вул. Шевченка 16а</li>
              <li>T: +380 000 000 000</li>
              <li>Е: bookway@gmail.com</li>
              <li>Карта магазинів</li>
            </ul>
          </div>
          <div style={{ gridArea: 'bottom', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <Instagram color="white" width={40} height={40} />
              <Twitter color="white" width={40} height={40} />
              <Facebook color="white" width={40} height={40} />
              <Pinterest color="white" width={40} height={40} />
            </div>
            <div style={{ color: 'var(--text-grey)', marginTop: "2rem"}}>Created by Elena Melnychuk 2023</div>
          </div>
        </ContentWrapper>
      </footer>
    </>
  );
}

export default PageFooter;
