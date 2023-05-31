'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';

import { currencyFormat } from '@/utils';

import { MotionBlock } from 'components/MotionBlock/MotionBlock';
import { Close } from 'components/Icons/Icons';
import Button from 'components/Button/Button';
import Counter from './Counter';
import { CartContext } from '../CartProvider/CartProvider';
// import { changeItem, removeItem } from '@/app/actions';

function CartItem({ id, variants, ...props }) {
  const { handleDeleteTodo, handleCountItem } = React.useContext( CartContext );
  // const [isPending, startTransition] = React.useTransition();
  const generategID = React.useId();
  const separatorVariants = {
    open: {
      scale: 1,
      transition: { type: "spring", bounce: 0, duration: .6, }
    },
    closed: { scale: 0, transition: { duration: 0.3 } }
  }
  function handleRemove( id ) {
    handleDeleteTodo(id);

    const deleteItem = async (v) => {
      const req = await fetch(`/api?name=user-cart&id=${id}`, { method: 'DELETE' });
    }
    deleteItem();

    // if (typeof window !== "undefined") {
    //   const storedValue = window.localStorage.getItem('user-cart');
    //   const token = JSON.parse(storedValue) || false;
    //   if ( !token ) return;
    //   token.splice(id, 1);
    //   return window.localStorage.setItem('user-cart', JSON.stringify(token));
    // }
  }
  function handleCount(count) {
    handleCountItem({index: id, count});
    const changeCount = async () => {
      const req = await fetch(`/api?name=user-cart&id=${id}&count=${count}`, { method: 'PUT' });
    }
    changeCount()
    // if (typeof window !== "undefined") {
    //   const storedValue = window.localStorage.getItem('user-cart');
    //   const token = JSON.parse(storedValue) || false;
    //   if ( !token ) return;
    //   token[id].count = count;
    //   return window.localStorage.setItem('user-cart', JSON.stringify(token));
    // }
  }

  return (<>
    {id > 0 && (
      <MotionBlock tag="hr" className={ styles.separate } variants={ separatorVariants } />
    )}
    <MotionBlock key={ generategID } className={ styles.item } variants={ variants }>
      <div className={ styles['col-1'] }>
        <span style={{ fontFamily: 'var(--rochester)' }}>{id + 1}</span>
        <Button title="видалити товар" role="button" onClick={ () => handleRemove( id ) }>
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
            <Counter handleCount={handleCount} exist={ props.count } className={ styles.counter }/>
          </div>
        </div>

        <div className={ styles.row }>
          <div className={styles.productSKU}>Код товару: <span style={{fontFamily: 'var(--rochester)'}}>123456</span></div>
          <div className={ styles.price } style={{ color: 'var(--text-grey)', fontFamily: 'var(--rochester)' }}>{currencyFormat(props.price)}</div>
        </div>
      </div>
    </MotionBlock>
  </>);
}

export default React.memo( CartItem );