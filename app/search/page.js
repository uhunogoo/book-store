import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import SliderBlock from 'components/SliderBlock/SliderBlock'
import { SITE_DATA } from '@/data';

export default function Page() {
  const { recently_view, books } = SITE_DATA
  const recentlyView = recently_view.list.map((book) => {
    const { image } = books[book.id];
    return { image };
  } );
  return (
    <>
      <BreadCrumbs array={[ 'Пошук' ]} style={{ marginBottom: '2rem' }}/>
      
      <h1 style={{ color: 'var(--text-green)' }}>Результати пошуку</h1>
      <p
        style={{ marginBottom: '12.875rem' }}
      >
        Нажаль, нічого не знайдено.
      </p>

      <SliderBlock 
        countInView={6} 
        style={{ '--col-gap': '1.25rem' }}
        title="Ви шукали" 
        listOfItems={recentlyView} 
      />
    </>
  )
}