"use client"
import { SITE_DATA } from '@/data';

import Button from 'components/Button/Button'

import styles from './page.module.css'
import ProductCard from 'components/ProductCard/ProductCard';
import { range } from '@/utils';
import { gsap } from 'gsap';
import SelectBlock from 'components/SelectBlock/SelectBlock';
import React from 'react';

export default function Page({ perpage = 24 }) {
  const { books } =  SITE_DATA;
  const count = books.length;
  const wrap = gsap.utils.wrap(0, count);

  return (
    <main className={styles.main}>
      <div className={ styles.topBar }>
        <h1>
          Каталог
        </h1>
        
        <BooksOrder />
        <SelectBlock />
      </div>

      <div className={ styles.row }>
        { range(perpage).map(( index ) => {
          const book = books[ wrap(index) ];

          return (
            <ProductCard key={book.id + '-' + index} {...book} />
          );
        }) }
      </div>
      <div className={ styles.pagination }>
        <Button title="назад">назад</Button>
        <Button title="вперед">далі</Button>
      </div>
    </main>
  )
}

function BooksOrder() {
  const [age, setAge] = React.useState('0-18');

  return (
    <form>
      <label htmlFor="age-select">
        Сортування
      </label>
      
      <select
        id="age-select"
        value={age}
        onChange={event => {
          setAge(event.target.value)
        }}
      >
        <option value="0-18">
          18 and under
        </option>
        <option value="19-39">
          19 to 39
        </option>
        <option value="40-64">
          40 to 64
        </option>
        <option value="65-infinity">
          65 and over
        </option>
      </select>
    </form>
  );
}