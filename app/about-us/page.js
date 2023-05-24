import Image from 'next/image'
import styles from './page.module.css'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'

export default function Page() {
  return (
    <main className={styles.main}>
      <BreadCrumbs style={{ marginBottom: '2rem' }}>
        <BreadCrumbs.Crumb>
          Про нас
        </BreadCrumbs.Crumb>
      </BreadCrumbs>
      
      <Image src="/images/content/image-1.jpg" width={2338} height={878} alt='image' />
      <h1>
        Про наш Клуб
      </h1>
      <div className={ styles.row }>
        <div style={{ gridArea: 'text-1' }}>
          <p>
            Книжковий Клуб «Bookway» – безперечний лідер ринку дистанційного продажу в Україні. Наша компанія піклується про те, щоб ваше дозвілля було цікавим, корисним та різноманітним. Придбайте наші книги та товари у фірмових магазинах по всій Україні або замовляйте доставку кур'єром на поштове відділення або відділення&nbsp;«Нової&nbsp;Пошти».
          </p>
        </div>
        <div style={{ gridArea: 'text-2' }}>
          <p>
            Понад 1 000 000 мільйонів сімей в Україні користуються вигодами, які надає Клуб. Якщо Ви ще не в Клубі&nbsp;–&nbsp;приєднуйтесь!
          </p>
        </div>
        <div className={ styles.image }>
          <Image src="/images/content/image-2.jpg" fill style={{objectFit: "cover"}} alt='image - 2' />
        </div>
      </div>
      <h2>
        У нас на сайті Ви зможете знайти книги на всі випадки&nbsp;життя:
      </h2>
      <ul>
        <li>
          твори світової класики, які не втратить своєї&nbsp;актуальності; 
        </li>
        <li>
          бестселери, які вже здобули визнання читачів усього&nbsp;світу; 
        </li>
        <li>
          актуальні новинки книжкового світу; пізнавальна література на будь-яку&nbsp;тему; 
        </li>
        <li>
          книги для особистісного зростання та розвитку&nbsp;бізнесу; 
        </li>
        <li>
          дивовижні книги для дітей; 
        </li>
        <li>
          інформаційно-довідкові видання; 
        </li>
        <li>
          чудові подарункові книги. 
        </li>
      </ul>
      <p>
        Весь асортимент книг, що представлений на сайті, проходить ретельну перевірку. Можливість появи неякісних екземплярів&nbsp;виключена.
      </p>
      <div className={styles.row2}>
        <div className={ styles.image2 }>
          <Image src="/images/content/image-3.jpg" fill style={{objectFit: "cover"}} alt='image - 3' />
        </div>
        <div style={{ gridArea: 'text-1' }}>
          <h2 className={styles.title}>
            Чому Вам варто співпрацювати з нами?
          </h2>
          <ul>
            <li>
              всі позиції, представлені на сайті, є у наявності на&nbsp;складі; 
            </li>
            <li>
              ми пропонуємо актуальну літературу та новинки найкращих авторів з усього&nbsp;світу; 
            </li>
            <li>
              привабливі знижки, цікаві акції та бонуси для наших&nbsp;клієнтів; 
            </li>
            <li>
              замовлення буде доставлено до будь-якої точки України в найкоротші&nbsp;терміни;   
            </li>
            <li>
              максимально зручні способи оплати&nbsp;клієнтам; 
            </li>
            <li>
              налагоджена система зворотного&nbsp;зв'язку. 
            </li>
          </ul>

        </div>
        <div style={{ gridArea: 'text-2' }}>
          <p>
            Ми цінуємо наших клієнтів та завжди раді новим покупцям. Наше завдання - зробити Ваше дозвілля корисним, незабутнім та&nbsp;приємним.
          </p>
        </div>
      </div>
    </main>
  )
}