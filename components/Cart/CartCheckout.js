import { motion } from 'framer-motion';
import Image from 'next/image';

// Styles 
import styles from './style.module.css';

// Utils
import { currencyFormat } from '@/utils';

// Components
import { MotionButton } from 'components/Button/Button';
import OrderButton from '../Button/OrderButton';
import UnderlinedText from '../UnderlinedText/UnderlinedText';


function CartCheckout({ items = [] }) {
  if (items.length === 0) return null;
  
  const subtotals = calculateSubtotal( items );
  return (<>
    {/* Cart footer */}
    <div className={ styles.cartFooter }>
      <motion.div className={ styles.summary } variants={ itemVariants }>
        <div>
          <span>Кіл-ть:</span>{' '}
          <span className={styles.currency}> 3 </span>
        </div>
        <div>
          <span>Всього:</span>{' '}
          <span className={styles.currency} > {currencyFormat( subtotals )} </span>
        </div>
      </motion.div>
      
      <motion.div className={styles.buttonsBlock} variants={ itemVariants }>
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
      </motion.div>
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