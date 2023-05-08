"use client";

import React from 'react';
import styles from './drop-down.module.css'
import Button from '../Button/Button';
import DecoratedBooks from '../DecoratedBooks/DecoratedBooks';

function DropDown({ data }) {
  const [ dropDownStatus, setDropDownStatus ] = React.useState( false );
  const activeClass = dropDownStatus ? styles.active : ''
  const buttonClass = `${styles.dropDownButton} ${activeClass}`;
  function handleClick() {
    setDropDownStatus( !dropDownStatus );
  }

  return (
    <>
      <Button
        onClick={ handleClick }
        title="user button" 
        type="button"
        className={ buttonClass }
      >
        Каталог
        {' '}
        <span className={ styles.arrow }></span>
      </Button>

      { dropDownStatus && <DropContent data={ data }/> }
    </>
  );
}

function DropContent({ data }) {
  const id = React.useId();
  return (
    <div key={id} className={ styles.dropDown }>
      <ul className={styles.list}>
        { data?.map( (item, id) => (
          <li>
            <a key={id} href='#'>{ item.title }</a>
          </li>
        ))}
      </ul>
      <DecoratedBooks style={{ margin: '1.35rem -1.2rem -1.5rem -1.2rem' }} />
    </div>
  );
}

export default React.memo( DropDown );