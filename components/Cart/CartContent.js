import { Rochester } from 'next/font/google';
const rochester400 = Rochester({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  weight: '400',
  variable: '--rochester'
});

import React from 'react';
import Image from 'next/image';


import { animated, easings, useSpring, useSpringRef, useSprings } from '@react-spring/web';

import Button from 'components/Button/Button';
import Scroll from 'components/Scroll/Scroll';

import styles from './style.module.css';

import { SITE_DATA } from '@/data';
import { currencyFormat } from '@/utils';
import CartItem from './CartItem';

const COUNT = 3;
function CartContent({ status = true, ...delegated }) {
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
  
  const titleAnimation = useSpring({
    from: { opacity: status ? 0 : 1, y: status ? 10 : 0,scale:  status ? 0.98 : 1,},
    to: { opacity: status ? 1 : 0, y: status ? 0 : 10,scale:  status ? 1 : 0.98, },
    delay: status ? 500 : 0,
    config: {
      duration: 400,
      easing: status ? easings.easeOutQuad : easings.easeOutSine,
    }
  });

  return (
    <div className={`${rochester400.variable} ${styles.cartContent}`} {...delegated}>
      <AnimatedBlocks status={status}>
        <h4>Кошик:</h4>
        <div className={styles.itemsList}>
          <AnimatedBlocks status={status}>
            {newBooksList.map(({ id, ...props }, i) => (
              <CartItem key={id + i} id={i} {...props} />
            ))}
          </AnimatedBlocks>
        </div>
      </AnimatedBlocks>

      {/* Cart footer */}
      <animated.div className={ styles.cartFooter } style={titleAnimation}>
        <div className={ styles.summary }>
          <div>
            <span>Кіл-ть:</span>{' '}
            <span className={styles.currency}> 3 </span>
          </div>
          <div>
            <span>Всього:</span>{' '}
            <span className={styles.currency} > {currencyFormat(400)} </span>
          </div>
        </div>
        
        <div className={styles.buttonsBlock}>
          <Button title="Повернутись" className={styles.back}>
            <Image src="/next-arrow.svg" width={13} height={13} alt='arrow' style={{transform: 'scale(-1)'}}/>
            <span>Повернутись</span>
          </Button>

          <Button 
            visual="default" 
            title="Оформити замовлення" 
            style={{
              margin: 0,
              background: 'hsl(var(--background-green))'
            }}
          >
            Замовити
          </Button>
        </div>
      </animated.div>
    </div>
  );
}

function AnimatedBlocks({ status, children }) {
  const items = React.Children.toArray(children);
  const time = 200;
  const [trail, api] = useSprings(
    items.length,
    (i) => ({
      opacity: status ? 1 : 0,
      y: status ? 0 : 15,
      scale: status ? 1 : 0.98,
      from: { opacity: 0, y: 15, scale: 0.98 },
      delay: status ? delay(i) : delay((items.length - 1 ) - i),
      config: {
        duration: 300,
        easing: status ? easings.easeOutQuad : easings.easeOutSine,
      },
    }),
    [status]
  );

  function delay(i) {
    const d = 100 + (time * i);
    return d;
  }

  return (<>
    {trail.map( ({ ...style }, index) => (
      <animated.div key={index} style={{willChange: 'transform, opacity', ...style}}>
        { items[index] }
      </animated.div>
    ))}
  </>)
}

export default CartContent;
