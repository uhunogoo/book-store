"use client";
import Image from 'next/image';
import React from 'react';

import styles from './search-form.module.css';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

function SearchForm({ className='', ...delegated }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  function handleSearch(event) {
    event.preventDefault();
  } 
  
  return (
    <form 
      {...delegated}
      className={ `${ styles.search } ${ className }` }
      onSubmit={handleSearch} 
    >
      <TextInput
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