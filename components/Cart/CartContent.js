import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Rochester } from 'next/font/google';
const rochester400 = Rochester({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--rochester'
});

import { Close } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import Scroll from 'components/Scroll/Scroll';

import styles from './style.module.css';
import { SITE_DATA } from '@/data';
import Counter from './Counter';
import { currencyFormat } from '@/utils';

const COUNT = 3;
function CartContent({ ...delegated }) {
  const { books } = SITE_DATA;
  const newBooksList = React.useMemo(() => {
    const booksList = [];

    for (let i = 0; i < COUNT; i++) {
      const { image, price, title, subtitle, slug } = books[i];
      booksList.push({
        image,
        price,
        title,
        subtitle,
        slug,
      });
    }

    return booksList;
  }, [books]);

  return (
    <div className={`${rochester400.variable} ${styles.cartContent}`} {...delegated}>
      <h4>Кошик:</h4>
      <div className={styles.itemsList}>
        <Scroll>
          {newBooksList.map(({ id, ...props }, i) => (
            <CartItem key={id} id={i} {...props} />
          ))}
        </Scroll>
      </div>
      <div className={ styles.cartFooter }>
        <div style={{
          display: 'grid',
          placeItems: 'end',
          marginTop: '1rem'
        }}>
          <div style={{ display: "flex", gap: '1rem' }}>
            <div>
              <span>Кіл-ть:</span>{' '}
              <span style={{ 
                color: 'var(--text-green)', 
                fontSize: 'var(--text-size)',
                fontFamily: 'var(--rochester)'
              }}>
                3
              </span>
            </div>
            <div>
              <span>Всього:</span>{' '}
              <span style={{ 
                color: 'var(--text-green)', 
                fontSize: 'var(--text-size)',
                fontFamily: 'var(--rochester)'
              }}>
                {currencyFormat(400)}
              </span>
            </div>
          </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '1rem'
        }}>
          <Button title="Повернутись" 
            style={{
              display: "flex",
              gap: '0.5em',
              color: 'var(--text-grey)'
            }}
          >
            <Image src="/next-arrow.svg" width={13} height={13} alt='arrow' style={{transform: 'scale(-1)'}}/>
            <span>Повернутись</span>
          </Button>

          <Button 
            visual="default" 
            title="Додати до кошика" 
            style={{
              margin: 0,
              background: 'hsl(var(--background-green))'
            }}
          >
            Замовити
          </Button>
        </div>
      </div>
    </div>
  );
}

function CartItem({ id, ...props }) {
  return (
    <div className={ styles.item }>
      <div className={ styles['col-1'] }>
        <span style={{ fontFamily: 'var(--rochester)' }}>{id + 1}</span>
        <Button>
          <Close height={20} width={20} />
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
    </div>
  );
}

export default CartContent;
