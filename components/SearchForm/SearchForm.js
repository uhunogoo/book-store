"use client";
import Image from 'next/image';
import React from 'react';

import styles from './search-form.module.css';

import Button from '../Button/Button';
import { useRouter } from 'next/navigation';
import { Fieldset } from '../Form/Form';

function SearchForm({ className='', ...delegated }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = React.useState('');
  function handleSearch(event) {
    event.preventDefault();

    router.push(`/search?term=${searchTerm}`);
    setSearchTerm('');
  } 
  
  return (
    <form 
      {...delegated}
      className={ `${ styles.search } ${ className }` }
      onSubmit={handleSearch} 
    >
      <Fieldset
        required={true}
        placeholder="Пошук..."
        value={searchTerm}
        className={ styles.searchInput }
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <Button
        type="submit"
        title="search button"
        className={ styles.searchButton }
      >
        <Image src="/search.svg" height={10} width={10} alt="search icon" title="search" />
      </Button>
    </form>
  );
}

export default SearchForm;