import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css'

import FormElement from './Form';
import { Clock, LocationMarker, Mail, Phone } from 'components/Icons/Icons';
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';

export default function Page() {
  return (
    <section className={styles.main}>
      <BreadCrumbs style={{ marginBottom: '2rem' }}>
        <BreadCrumbs.Crumb>
          Контакти
        </BreadCrumbs.Crumb>
      </BreadCrumbs>

      <div className={styles.row}>
        <div className={styles.image}>
          <Image 
            src="/images/contacts/map-image.png" 
            sizes="(max-width: 768px) 100vw" 
            alt="карта магазинів"
            style={{objectFit: "cover"}} 
            priority
            fill
          />
        </div>
        <div className={styles.textColumn}>
          <InformationBlock icon={ <LocationMarker color={'var(--text-green)'} /> }>
            <p>
              Вул. Шевченка 16а, м. Вінниця, Україна
            </p>
          </InformationBlock>
          <InformationBlock icon={ <Clock color={'var(--text-green)'} /> } >
            <p>
              Час роботи:
            </p>
            <ul>
              <li>
                Пн - Пт: 9:00 - 20:00
              </li>
              <li>
                Сб: 10:00 - 18:00
              </li>
              <li>
                Нд: вихідний
              </li>
            </ul>
          </InformationBlock>
          
          <InformationBlock  icon={ <Phone color={'var(--text-green)'} /> }>
            <Link href={'tel:+380630000000'}>
              +380 630 000 000
            </Link>
            <Link href={'tel:+380960000000'}>
              +380 960 000 000
            </Link>
          </InformationBlock>

          <InformationBlock  icon={ <Mail color={'var(--text-green)'} /> }>
            <Link href={'mailto:bookway@gmail.com'}>
              bookway@gmail.com
            </Link>
          </InformationBlock>
        </div>
      </div>
      <p>
        З усіх питань оформлення замовлення, доставки, оплати та повернення звертайтесь за вказаними вище номерами або на адресу електронної пошти нашого магазину. 
      </p>
      <p>
        Замовлення на сайті обробляються щодня та цілодобово. Ми завжди передзвонюємо для уточнення та обробки замовлення. Якщо товар є в наявності в магазині, то ми відправляємося в найкоротший термін.
      </p>
      <p>
        Самовивіз товару можливий під час роботи магазину.
      </p>
      <p>
        Якщо Вас цікавлять питання реклами, співробітництва тощо, просимо заповнити контактну форму нижче або безпосередньо на електронну адресу магазину.
      </p>
      <h2>
        Заповніть форму для зв'язку з нами
      </h2>
      <FormElement className={ styles.form } />
    </section>
  );
}

function InformationBlock({ icon = false, children }) {
  return (
    <div className={ styles.informationBlock }>
      {icon && (
        <div className={ styles.icon }>
          { icon }
        </div>
      )}
      <div className={ styles.text }>
        { children }
      </div>
    </div>
  );
}

