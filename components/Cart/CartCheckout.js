import Image from 'next/image';

// Styles 
import styles from './style.module.css';

// Utils
import { currencyFormat } from '@/utils';

// Components
import { MotionButton } from 'components/Button/Button';
import OrderButton from '../Button/OrderButton';
import UnderlinedText from '../UnderlinedText/UnderlinedText';
import { MotionBlock } from 'components/MotionBlock/MotionBlock';


function CartCheckout({ items = [] }) {
  if (items.length === 0) return null;
  const itemVariants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", bounce: 0, duration: 0.4 }
    },
    closed: { opacity: 0, scale: 0.96, y: 10, transition: { type: "spring", bounce: 0, duration: 0.4 } },
    hover: { 
      background: 'white', 
      transition: { type: "spring", bounce: 0, duration: 0.4 } 
    },
  }

  const subtotals = calculateSubtotal( items );
  return (<>
    {/* Cart footer */}
    <div className={ styles.cartFooter }>
      <MotionBlock className={ styles.summary } variants={ itemVariants }>
        <div>
          <span>Кіл-ть:</span>{' '}
          <span className={styles.currency}> 3 </span>
        </div>
        <div>
          <span>Всього:</span>{' '}
          <span className={styles.currency} > {currencyFormat( subtotals )} </span>
        </div>
      </MotionBlock>
      
      <MotionBlock className={styles.buttonsBlock} variants={ itemVariants }>
        <MotionButton 
          initial={{ color: 'var(--text-grey)' }}
          whileHover={{
            color: 'var(--text-dark)',
          }}
          transition={{ type: 'tween', duration: 0.3 }}
          title="Повернутись" 
          className={styles.back}
        >
          <Image src="/next-arrow.svg" width={13} height={13} alt='arrow' style={{transform: 'scale(-1)'}}/>
          <UnderlinedText preferMainColor="white">Повернутись</UnderlinedText>
        </MotionButton>

        <OrderButton />
      </MotionBlock>
    </div>
  </>)
}

function calculateSubtotal(items) {
  let subtotal = 0;

  items.forEach((item) => {
    subtotal += item.price;
  });

  return subtotal;
}

export default CartCheckout;