import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import SliderBlock from 'components/SliderBlock/SliderBlock'
import { SITE_DATA } from '@/data';
import SearchUnsucess from './SerchUnsucces';

export default function Page() {
  const searchResult = [];
  const { recently_view, books } = SITE_DATA
  const recentlyView = recently_view.list.map((book) => {
    const { image } = books[book.id];
    return { image };
  } );
  return (
    <>
      <BreadCrumbs style={{ marginBottom: '2rem' }}>
        <BreadCrumbs.Crumb>
          Пошук
        </BreadCrumbs.Crumb>
      </BreadCrumbs>
      
      <h1 style={{ color: 'var(--text-green)' }}>Результати пошуку</h1>
      
      {searchResult.length === 0 && <SearchUnsucess />}

      <SliderBlock 
        countInView={6} 
        style={{ '--col-gap': '1.25rem' }}
        title="Ви шукали" 
        listOfItems={recentlyView} 
      />
    </>
  )
}