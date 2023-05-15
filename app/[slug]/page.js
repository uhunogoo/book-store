import React from 'react';
import Image from 'next/image';
import { SITE_DATA } from '@/data';

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
  const book = React.useMemo(() => {
    const filter = books.filter( book => book.slug === params.slug ); 
    return filter[0];
  }, [ params ]);

  return (
    <>
      <h1>{ book.title } </h1>
      <ProductImage image={book.image} />
      <p>
        { book.inormation.shortDescription }
      </p>
      <p>
        { book.inormation.rating }
      </p>
      {book.inormation.characterisctics.map((char, i) => (
        <div key={i} className={ 'row' }>
          <div>
            { characterisctics[i] }
          </div>
          <div>
            { char }
          </div>
        </div>
      ))}
      { book.inormation.description.map( (text, i) => (
        <p key={i}>
          {text}
        </p>
      )) }
    </>
  );
}

function ProductImage({ image }) {
  const width = image.width ? image.width : 230;
  const height = image.height ? image.height : 315; 

  return (
    <Image
      // className={styles.productImage} 
      src={ image.src } 
      width={width} 
      height={height} 
      alt={ image.title } 
      title={ `${ image.title }, зображення` } 
    />
  );
}

export default Page;