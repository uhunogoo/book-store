import Navigation from '@/components/Navigation/Navigation';
import { SITE_DATA } from '@/data';
import Image from 'next/image';

export default function Page() {
  const { category_navigation } = SITE_DATA;
  return (
    <>
      <Image 
        src={'/images/banners/banner-1.jpg'} 
        alt="banner image"
        width={2270}
        height={1200}
      />
      <Navigation navigationList={ category_navigation } />
    </>
  )
}
