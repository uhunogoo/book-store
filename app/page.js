import Image from 'next/image';
import { SITE_DATA } from '@/data';

import Navigation from 'components/Navigation/Navigation';
import SliderBlock from 'components/SliderBlock/SliderBlock';
import Banner from 'components/Banner/Banner';

export default function Page() {
  const { 
    category_navigation, 
    top_selling,
    week_authors, 
    new_books,
    select_series,
    recently_view,
    series,
    authors,
    books 
  } = SITE_DATA;
  
  const topSelling = separate( top_selling.list, books );
  const newBooks = separate( new_books.list, books );
  const weekAuthors = separate( week_authors.list, authors );
  const selectedSeries = separate( select_series.list, series );
  
  const recentlyView = recently_view.list.map((book) => {
    const { image } = books[book.id];
    return { image };
  } );

  // information
  function separate(target, array) {
    const newBooks = target.map((book) => {
      const {information, ...data} = array[book.id];
      return data;
    });
    return newBooks;
  }

  return (
    <>
      <Image 
        src={'/images/banners/banner-1.jpg'} 
        alt="banner image"
        width={2270}
        height={1200}
      />
      <Navigation navigationList={ category_navigation } style={{ marginTop: 'var(--size-30)' }} />

      <Banner />

      <h2 style={{ 
        color: 'var(--text-green)', 
        fontSize: 'var(--text-size-title)',
        margin: 'var(--size-30) 0 0' 
      }}>
        Книжковий клуб “Bookway” 
      </h2>

      <SliderBlock 
        title={ top_selling.title } 
        listOfItems={topSelling} 
      />

      <SliderBlock 
        title={ new_books.title } 
        listOfItems={newBooks} 
      />
      <SliderBlock 
        title={ week_authors.title } 
        listOfItems={weekAuthors} 
      />
      <SliderBlock
        countInView={3} 
        title={ select_series.title } 
        listOfItems={selectedSeries} 
        maxWidth={350}
        />
      <SliderBlock 
        countInView={6} 
        style={{ '--col-gap': '1.25rem' }}
        title={ recently_view.title } 
        listOfItems={recentlyView} 
      />

    </>
  )
}


