import Image from 'next/image';
import Link from 'next/link';
import { Close } from 'components/Icons/Icons';
import Counter from './Counter';
import { currencyFormat } from '@/utils';
import styles from './style.module.css';
import Button from '../Button/Button';
import { motion } from 'framer-motion'; 
import React from 'react';

function CartItem({ id, variants, ...props }) {
  const generategID = React.useId();
  const separatorVariants = {
    open: {
      scale: 1,
      transition: { type: "spring", bounce: 0, duration: .6, }
    },
    closed: { scale: 0, transition: { duration: 0.3 } }
  }

  return (<>
    {id > 0 && (
      <motion.hr className={ styles.separate } variants={ separatorVariants } />
    )}
    <motion.div key={ generategID } className={ styles.item } variants={ variants }>
      <div className={ styles['col-1'] }>
        <span style={{ fontFamily: 'var(--rochester)' }}>{id + 1}</span>
        <Button title="видалити товар" role="button">
          <Close height={20} width={20} color={'var(--icon-color, var(--text-dark))'} />
        </Button>
      </div>
      <div className={styles['col-2']}>
        <Link href={`/${props.slug}`}>
          <Image
            src={props.image.src}
            width={props.image.width || 80 }
            height={props.image.height || 112 }
            alt={props.title}
          />
        </Link>
      </div>
      <div className={styles['col-3']}>
        <div className={ styles.row }>
          <div className={ styles.titles }>
            <span>{props.title}</span>
            <span>{props.subtitle}</span>
          </div>

          <div className={styles.count}>
            <span>Кіл-ть:</span>
            <Counter className={ styles.counter }/>
          </div>
        </div>

        <div className={ styles.row }>
          <div className={styles.productSKU}>Код товару: <span style={{fontFamily: 'var(--rochester)'}}>123456</span></div>
          <div className={ styles.price } style={{ color: 'var(--text-grey)', fontFamily: 'var(--rochester)' }}>{currencyFormat(props.price)}</div>
        </div>
      </div>
    </motion.div>
  </>);
}

export default CartItem;