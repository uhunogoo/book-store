import React from 'react';
import Image from 'next/image';
import { SITE_DATA } from '@/data';

import styles from './style.module.css';
import { currencyFormat } from '@/utils';
import Button from 'components/Button/Button';
import { Favorite } from 'components/Icons/Icons';
import SliderBlock from 'components/SliderBlock/SliderBlock';
import Tab from 'components/Tab/Tab';
import Rating from 'components/Rating/Rating';
import Comments from 'components/Comments/Comments';

const characterisctics = [
  'Код товару',
  'Назва товару',
  'Автор',
  'Мова',
  'Оригінал',
  'Кіл-ть сторінок',
  'Обкладинка',
  'Формат',
  'Рік видання',
  'ISBN',
  'Видавництво',
  'Вага',
]

function Page({ params  }) {
  const { books } = SITE_DATA;
  const [ book, fromThisAuthor ] = React.useMemo(() => {
    const current = books.filter( book => book.slug === params.slug ); 
    const authorFilter = books.filter( book => {
      return book.subtitle === current[0].subtitle && book.id !== current[0].id 
    });
    const fromThisAuthor = authorFilter.map( book => {
      const {image} = book;
      return {image};
    });

    return [ current[0], fromThisAuthor ];
    
  }, [ params ]);

  return (
    <>
      <h1 className={ styles.h1 }>{ book.title } </h1>
      <div className={ styles.product }>
        <div className={styles.gallery}>
          <div className={ styles.galleryCol }>
            <Image src='/images/gallery/image-1.jpg' width={98} height={124} alt="image - 1"/>
            <Image src='/images/gallery/image-2.jpg' width={98} height={124} alt="image - 2"/>
            <div className={ styles.galleryColLast }>
              <span>більше</span>
              <Image src='/images/gallery/image-3.jpg' width={98} height={124} alt="image - 3"/>
            </div>
          </div>
          <ProductImage image={book.image} />
        </div>
        <div className="info">
          <div className={ styles.productData }>
            <div>
              <h2 className={ styles.h2 } style={{ marginBottom: '0.2rem' }}>{ book.subtitle }</h2>

              <Rating rating={ book.information.rating } />
              
              <Button title="подивитись відгуки" style={{ marginTop: '0.2rem', textDecoration: 'underline' }}>20 відгуків</Button>
            </div>
            <div>
              <span className={ styles.currency }>{ currencyFormat.format( book.price ) }</span>
            </div>
          </div>

          <p style={{ marginTop: '1rem' }}>
            { book.information.shortDescription }
          </p>
          <div className={ styles.actions }>
            <Button title="Додати в улюблене">
              <Favorite width={32} height={32} />
            </Button>
            <Button visual="default" title="Додати до кошика">Замовити</Button>
          </div>
        </div>
      </div>
      
      { fromThisAuthor.length > 0 &&( 
        <SliderBlock 
          countInView={6} 
          style={{ '--col-gap': '1.25rem', marginTop: '1.5rem' }}
          listOfItems={fromThisAuthor} 
          title={
            <h2 className={ styles.h2 } style={{ color: 'var(--text-dark)', marginTop: 'var(--text-size-title)'}}>Також книжки автора</h2>
          } 
        />
      )}
      <Tab 
        tabs={[
          {
            title: "Характеристики",
            content: <BookCharacterisctics information={ book.information } />
          },
          {
            title: "Опис",
            content: <BookDescription information={ book.information } />
          },
          {
            title: "Коментарі",
            content: <Comments />
          }
        ]}
      />
    </>
  );
}

function BookCharacterisctics({ information }) {
  return (<>
    {!!information && (
      information.characterisctics.map((char, i) => (
        <div key={i} className={ styles.row }>
          <div>
            { characterisctics[i] }
          </div>
          <div>
            { char }
          </div>
        </div>
      ))
    )}
  </>);
}
function BookDescription({ information }) {
  return (<>
    { information.description.map( (text, i) => (
      <p key={i}>
        {text}
      </p>
    )) }
  </>);
}

function ProductImage({ image }) {
  const width = image.width ? image.width : 230;
  const height = image.height ? image.height : 315; 

  return (
    <Image
      src={ image.src } 
      width={width} 
      height={height} 
      alt={ image.title } 
      title={ `${ image.title }, зображення` } 
    />
  );
}

export default Page;