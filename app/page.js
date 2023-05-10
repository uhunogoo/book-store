import Image from 'next/image';
import { SITE_DATA } from '@/data';

import Navigation from '@/components/Navigation/Navigation';
import SliderBlock from '@/components/SliderBlock/SliderBlock';
import Banner from '@/components/Banner/Banner';

export default function Page() {
  const { 
    category_navigation, 
    top_selling,
    week_authors, 
    new_books,
    authors,
    books 
  } = SITE_DATA;
  const topSelling = top_selling.list.map((book) => books[book.id] );
  const newBooks = new_books.list.map((book) => books[book.id] );
  const weekAuthors = week_authors.list.map((book) => authors[book.id] );

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

    </>
  )
}


