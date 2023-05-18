import Image from 'next/image';
import Rating from '../Rating/Rating';
import styles from './style.module.css';
import Button from 'components/Button/Button';
const COMMENTS = [
  {
    id: crypto.randomUUID(),
    image: {
      src: '/user.jpg',
      height: 100,
      width: 100,
    },
    name: 'Анна Швець',
    role: 'Секретар',
    comment:
      'Книжка написана зрозумілою мовою, легко читається, легко сприймається. Кожна рекомендація проілюстрована реальними історіями життя, щоб показати як це працює. Рекомендується до прочитання всім, оскільки кожна людина протягом життя або впливає на інших, або піддається впливу. Після прочитання починаєш бачити те, що раніше навіть не знав!',
    rating: 4,
    date: '2 вересня 2023',
  },
  {
    id: crypto.randomUUID(),
    image: {
      src: '/user.jpg',
      height: 100,
      width: 100,
    },
    name: 'Ольга Крилова',
    role: 'Адміністративний директор',
    comment:
      'Книжка написана зрозумілою мовою, легко читається, легко сприймається. Кожна рекомендація проілюстрована реальними історіями життя, щоб показати як це працює. Рекомендується до прочитання всім, оскільки кожна людина протягом життя або впливає на інших, або піддається впливу. Після прочитання починаєш бачити те, що раніше навіть не знав!',
    rating: 5,
    date: '4 січня 2022',
  },
];
function Comments() {
  return (
    <>
      {COMMENTS.map(({ image, id, ...props }) => (
        <CommentContainer key={id} image={image} {...props} />
      ))}

      <Button title="Показати ще" className={ styles.more }>Показати ще</Button>
    </>
  );
}

function CommentContainer({ image, ...props }) {
  return (
    <div className={styles.comment}>
      <div className="image">
        <Image {...image} alt={props.name} />
      </div>
      <div className={styles.commentBody}>
        <div className={styles.topRow}>
          <div className="titles">
            <h3>{props.name}</h3>
            <h4>{props.role}</h4>
          </div>
          <Rating rating={props.rating} />
        </div>
        <p>{props.comment}</p>
        <div className={ styles.date }>{props.date}</div>
      </div>
    </div>
  );
}

export default Comments;
