import Image from 'next/image';
import styles from './style.module.css';
import Propositions from '../profile/Propositions';
import Rating from 'components/Rating/Rating';

export default function Page() {
  return (<>
    <div className={ styles.card }>
      <div className={ styles.col }>
        <h2>Купуйте з більшою вигодою!</h2>
        <Image src='/progress.jpg' width={420} height={28} alt='progress' />
        <p>
          Залишайте оцінки та коментарі до своїх замовлень та підвищуйте свій рейтинг.
        </p>
        <div>
          <span>Моя знижка:</span>
        </div>
        <div className={ styles.dicount }>
          20%
        </div>
      </div>
      <div>
        <Image  src="/photo.jpg" width={150} height={195} style={{border: '2px solid var(--text-green)'}} alt="зображення користувача" />
        <div 
          style={{ 
            display: 'flex',
            fontSize: 'var(--text-small)', 
            justifyContent: 'space-between', 
            color: 'var(--text-grey)',
            margin: '1.1rem 0 0.5rem'
          }}
        >
          <span>
            Ваш рейтинг:
          </span>
          <span>
            8.1
          </span>
        </div>
        <Rating rating={4} />
      </div>
    </div>
    <Propositions />
  </>);
}