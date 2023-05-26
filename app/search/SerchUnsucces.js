'use client';
import { useSearchParams } from 'next/navigation';

function SearchUnsucess() {
  const searchParams = useSearchParams();
  const search = searchParams.get('term');
  return(
    <p style={{ marginBottom: '12.875rem' }} >
      Нажаль, за вашим запитом "{ search }" нічого не знайдено.
    </p>
  );
}

export default SearchUnsucess;