'use client'
import React from 'react';
import styles from './style.module.css';
import Wishlist from '@/components/Wishlist/Wishlist';
import { FavoriteContext } from '@/components/Providers/FavoriteProvider';

export default function Page() {
  const { favoriteItems } = React.useContext(FavoriteContext);
  
  return (<>
    <div className={ styles.card }>
      <h2>Список бажань</h2>
      <div className={styles.row}>
        { favoriteItems.map(item => (
          <Wishlist key={ item.id } book={ item }/>
        ))}
      </div>
    </div>
  </>);
}