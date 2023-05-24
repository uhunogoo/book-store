"use client";
import React from 'react';
import Image from 'next/image';

import styles from './page-header.module.css';
import { SITE_DATA } from '@/data';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';
import DecoratedTree from './DecoratedTree';
import { Favorite, User } from '../Icons/Icons';
import Cart from 'components/Cart/Cart';
import Link from 'next/link';
import UserComponent from '../UserComponent/UserComponent';

function PageHeader() {
  const { top_navigation, dropDown } = SITE_DATA;
  const topLinks = top_navigation.length ? top_navigation : [];
  
  return (
    <>
      <header style={{ marginBottom: '2.5rem', position: 'relative'}}>
        <Navigation 
          needLinkChecking={ true }
          aria-label="Navigation" 
          navigationList={ topLinks } 
        />

        <div style={{ background: 'hsl(var(--background-green))' }}>
          <ContentWrapper main={ false } className={ styles.middleMenuWrapper }>
            <Link href="/">
              <Image className={styles.logo} src="/logo.png" width={220} height={87} priority alt="site logo" title="Oculus site logo" />
            </Link>
            
            <DropDown data={ dropDown }/>

            <div className={ styles.middleMenuButtons }>
              <SearchForm className={ styles.headerSearch }/>
              <Cart />
              <Button 
                title="favorite button" 
                type="button"
                numOfItems={15}
              >
                <Favorite width="40" height="40" />  
              </Button>
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