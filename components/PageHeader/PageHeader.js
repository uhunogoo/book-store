'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './page-header.module.css';
import { SITE_DATA } from '@/app/lib/data';

import DropDown from '../DropDown/DropDown';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import DecoratedTree from './DecoratedTree';
import Cart from 'components/Cart/Cart';
import UserComponent from '../UserComponent/UserComponent';
import FavoriteBlock from '../Favorite/Favorite';
import ButtonGroup from '../DropMenu/ButtonsGroup';


function PageHeader() {
  const { top_navigation, dropDown } = SITE_DATA;
  const topLinks = top_navigation.length ? top_navigation : [];
  
  return (
    <>
      <header style={{ 
        marginBottom: '2.5rem', 
      }}>
        <Navigation 
          needLinkChecking={ true }
          aria-label="Navigation" 
          navigationList={ topLinks } 
        />

        <div style={{ background: 'hsl(var(--background-green))' }}>
          <ContentWrapper main={ false } className={ styles.middleMenuWrapper }>
            <Link href="/">
              <Image className={styles.logo} src="/logo.png" width={220} height={87} priority alt="site logo" title="Головна сторінка" />
            </Link>
            
            <DropDown data={ dropDown }/>

            <div className={ styles.middleMenuButtons }>
              <SearchForm className={ styles.headerSearch }/>
              
              {/* <Cart />
              <FavoriteBlock /> */}
              <ButtonGroup />
              <UserComponent/>
            </div>

            <DecoratedTree />
            <DecoratedTree location="right" />
            
          </ContentWrapper>
        </div>
      </header>
    </>
  );
}

export default PageHeader;