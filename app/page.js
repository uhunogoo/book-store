import Image from 'next/image';
import { SITE_DATA } from '@/data';

import Navigation from '@/components/Navigation/Navigation';
import ProductCard from '@/components/ProductCard/ProductCard';

export default function Page() {
  const { category_navigation, top_selling, books } = SITE_DATA;
  const topSelling = top_selling.map((book) => books[book.id] );

  return (
    <>
      <Image 
        src={'/images/banners/banner-1.jpg'} 
        alt="banner image"
        width={2270}
        height={1200}
      />
      <Navigation navigationList={ category_navigation } />
      <div className="banner">
        <p>
          Встигніть отримати картку до <span className="accent">1.07</span> та отримайте <span className="accent">-5%</span> знижки на всю Вашу покупку!
        </p>
      </div>
      <h2>
        Книжковий клуб “Bookway” 
      </h2>

      <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        flex: '1 25%'
      }}>
        { topSelling.map(({id, ...props }) => (
          <ProductCard key={ id } { ...props } style={{ minWidth: '25%' }} />
        )) }
      </div>

    </>
  )
}


