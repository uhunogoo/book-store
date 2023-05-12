import Image from 'next/image';
import styles from './page.module.css'
import Link from 'next/link';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1>Контакти</h1>
      <div className={styles.row}>
        <div className={styles.image}>
          <Image 
            src="/images/contacts/image-1.jpg" 
            sizes="(max-width: 768px) 100vw" 
            priority
            alt="карта магазинів" 
            fill
          />
        </div>
        <div className="text">
          <div className="location">
            <p>
              Вул. Шевченка 16а, м. Вінниця, Україна
            </p>
          </div>
          <div className="time">
            <p>
              Час роботи:
            </p>
            <p>
              Пн - Пт: 9:00 - 20:00
            </p>
            <p>
              Сб: 10:00 - 18:00
            </p>
            <p>
              Нд: вихідний
            </p>
          </div>
          <div className="phones">
            <Link href={'tel:+380630000000'}>
              +380 630 000 000
            </Link>
            <Link href={'tel:+380960000000'}>
              +380 960 000 000
            </Link>
          </div>
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
    </main>
  );
}