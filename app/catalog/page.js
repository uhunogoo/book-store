import React from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

import { range } from '@/app/lib/utils';
import { SITE_DATA } from '@/app/lib/data';

import styles from './page.module.css'
import Button from 'components/Button/Button'
import ProductCard from 'components/ProductCard/ProductCard';
import SelectBlock from 'components/SelectBlock/SelectBlock';
import SliderBlock from 'components/SliderBlock/SliderBlock';
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs';
import UnderlinedText from '@/components/UnderlinedText/UnderlinedText';

const SORTING = [ {title: 'Топ'}, {title: 'За новизною'}, {title: 'За популярністю'} ];
const perpage = 24;
export default function Page() {
  const { books, dropDown,recently_view } =  SITE_DATA;
  const count = books.length;
  const wrap = gsap.utils.wrap(0, count);
  const recentlyView = recently_view.list.map((book) => {
    const { image } = books[book.id];
    return { image };
  } );
  
  return (
    <>
      <BreadCrumbs>
        <BreadCrumbs.Crumb>
          Каталог
        </BreadCrumbs.Crumb>
      </BreadCrumbs>

      <div className={ styles.topBar }>
        <h1>
          Каталог
        </h1>

        <div style={{ display:'flex', gap: '1rem', alignItems: 'center' }}>
          <span>Сортування:</span>
          <SelectBlock data={SORTING} />
        </div>
        <div style={{ display:'flex', gap: '1rem', alignItems: 'center' }}>
          <span>Жанри:</span>
          <SelectBlock data={dropDown} />
        </div>
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
        <Button className={ styles.paginationButton } title="вперед">
          <UnderlinedText>далі</UnderlinedText>
          <Image src="/next-arrow.svg" height={30} width={30} alt='next'/>
        </Button>
      </div>

      <SliderBlock 
        countInView={6} 
        style={{ '--col-gap': '1.25rem' }}
        title={ recently_view.title } 
        listOfItems={recentlyView} 
      />
    </>
  )
}