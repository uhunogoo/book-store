import Link from 'next/link'
import styles from './page.module.css'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import UnderlinedText from '@/components/UnderlinedText/UnderlinedText'

export default function Page() {
  const UnderlineSettings = {
    preferMainColor: "white",
    preferSelectionColor: "var(--text-green)"
  }
  return (
    <main className={styles.main}>
      <BreadCrumbs style={{ marginBottom: '2rem' }}>
        <BreadCrumbs.Crumb>
          Політика конфеденційності
        </BreadCrumbs.Crumb>
      </BreadCrumbs>
      
      <h1>
        Політика конфеденційності
      </h1>
      <p>
        <strong>Bookway</strong> управляє веб-сайтом bookway.ua, який надає&nbsp;сервіс.
      </p>
      <p>
        Ця сторінка використовується для інформування відвідувачів веб-сайту про наші правила збору, використання та розкриття Особистої інформації, якщо хтось вирішив використовувати нашу Службу - веб-сайт під назвою&nbsp;bookway.ua.
      </p>
      <p>
        Якщо ви вирішите використати наш Сервіс, ви погоджуєтесь на збір та використання інформації відповідно до цієї політики. Особиста інформація, яку ми збираємо, використовується для надання та покращення Сервісу. Ми не будемо використовувати або передавати вашу інформацію будь-кому, крім випадків, описаних у цій Політиці&nbsp;конфіденційності.
      </p>
      <p>
        Терміни, що використовуються в цій Політиці конфіденційності, мають ті ж значення, що й у наших Умовах використання, які доступні за адресою веб-сайту, якщо інше не визначено в цій Політиці&nbsp;конфіденційності.
      </p>
      <h2>
        Збір та використання інформації
      </h2>
      <p>
        Для зручнішого використання нашого Сервісу ми можемо зажадати від вас надати нам певну особисту інформацію, включаючи, крім іншого, ваше ім'я, номер телефону та поштову адресу. Інформація, яку ми збираємо, буде використана для встановлення вашої&nbsp;особи.
      </p>
      <h3>
        Дані журналу
      </h3>
      <p>
        Ми хочемо повідомити вам, що кожного разу, коли ви відвідуєте наш сервіс, ми збираємо інформацію, яку надсилає нам ваш браузер, яка називається Log Data. Ці дані журналу можуть включати таку інформацію, як адреса вашого інтернет-протоколу («IP»), версія браузера, сторінки нашого Сервісу, які ви відвідуєте, час та дата вашого відвідування, час, проведений на цих сторінках та інша&nbsp;статистика.
      </p>
      <h3>
        Cookies
      </h3>
      <p>
        Файли cookie - це файли з невеликим обсягом даних, у яких зазвичай використовується унікальний анонімний ідентифікатор. Вони надсилаються до вашого браузера з веб-сайту, який ви відвідуєте, і зберігаються на жорсткому диску&nbsp;комп'ютера.
      </p>
      <p>
        Наш веб-сайт використовує ці «кукі» для збирання інформації та покращення нашого Сервісу. Ви можете прийняти або відхилити ці файли cookie і дізнатися, коли файл cookie надсилається на ваш комп'ютер. Якщо ви вирішите відмовитись від наших файлів cookie, можливо, ви не зможете використовувати деякі частини нашого&nbsp;Сервісу.
      </p>
      <h2>
        Постачальники послуг
      </h2>
      <p>
        Ми можемо наймати сторонні компанії та приватні особи з&nbsp;таких&nbsp;причин:
      </p>
      <ul>
        <li>
          Для полегшення Сервісу;
        </li>
        <li>
          Надавати Сервіс від нашого імені;
        </li>
        <li>
          Сервісні послуги;
        </li>
        <li>
          Щоб допомогти нам у аналізі того, як використовується наш&nbsp;сервіс.
        </li>
      </ul>
      <p>
        Ми хочемо повідомити користувачів нашого Сервісу, що ці треті сторони мають доступ до Вашої Особистої інформації. Причина полягає в тому, щоб виконувати завдання, доручені ним від нашого імені. Однак вони зобов'язані не розголошувати і не використовувати інформацію для будь-яких інших&nbsp;цілей.
      </p>
      <h2>
        Безпека
      </h2>
      <p>
        Ми цінуємо вашу довіру у наданні нам вашої особистої інформації, тому ми прагнемо використовувати комерційно прийнятні засоби її захисту. Але пам'ятайте, що жоден метод передачі через Інтернет або метод електронного зберігання не є 100% безпечним і надійним, і ми не можемо гарантувати його абсолютну&nbsp;безпеку.
      </p>
      <h3>
        Посилання на інші сайти
      </h3>
      <p>
        Наш сервіс може містити посилання на інші сайти. Якщо ви натиснете на інше посилання, ви будете перенаправлені на цей сайт. Зауважте, що ці зовнішні сайти не керуються нами. Тому ми рекомендуємо вам ознайомитися з політикою конфіденційності цих веб-сайтів. Ми не контролюємо та не несемо відповідальності за зміст, політику конфіденційності чи дії будь-яких сторонніх сайтів&nbsp;чи&nbsp;служб.
      </p>
      <h3>
        Конфіденційність дітей
      </h3>
      <p>
        Наші Послуги не призначені для осіб віком до 13 років. Ми свідомо не збираємо особисту інформацію від дітей віком до 13 років. У випадку, якщо ми виявимо, що дитина молодше 13 років надала нам особисту інформацію, ми негайно видаляємо її з наших серверів. Якщо ви є батьком або опікуном і ви знаєте, що ваша дитина надала нам особисту інформацію, будь ласка, зв'яжіться з нами, щоб ми могли виконати необхідні&nbsp;дії.
      </p>
      <h2>
        Зміни цієї Політики конфіденційності
      </h2>
      <p>
        Ми можемо оновлювати нашу політику конфіденційності час від часу. Таким чином, ми радимо періодично переглядати цю сторінку на наявність змін. Ми повідомимо вас про будь-які зміни, розмістивши нову Політику конфіденційності на цій сторінці. Ці зміни набувають чинності негайно після публікації на&nbsp;цій&nbsp;сторінці.
      </p>
      <h2>
        Зв'язатися з нами
      </h2>
      <p>
        Якщо у вас є питання або пропозиції щодо нашої Політики конфіденційності, не соромтеся звертатися&nbsp;<Link href="/contacts"><UnderlinedText { ...UnderlineSettings }>до нас</UnderlinedText></Link>.
      </p>
    </main>
  )
}