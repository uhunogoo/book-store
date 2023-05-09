// "use client";
import Image from 'next/image';

import styles from './page-header.module.css';
import { SITE_DATA } from '@/data';

import ContentWrapper from '../ContentWrapper/ContentWrapper';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';
import DecoratedTree from './DecoratedTree';

function PageHeader() {
  const { top_navigation, dropDown } = SITE_DATA;
  const topLinks = top_navigation.length ? top_navigation : [];
  
  return (
    <>
      <header style={{ marginBottom: '2.5rem', position: 'relative'}}>
        <Navigation 
          aria-label="Navigation" 
          navigationList={ topLinks } 
        />

        <div style={{ background: 'var(--background-green)' }}>
          <ContentWrapper main={ false } className={ styles.middleMenuWrapper }>
            <Image className={styles.logo} src="/logo.png" width={220} height={87} alt="site logo" title="Oculus site logo" />
            
            <DropDown data={ dropDown }/>

            <div className={ styles.middleMenuButtons }>
              <SearchForm className={ styles.headerSearch }/>
              <Button 
                title="cart button" 
                type="button"
                numOfItems={1}
                >
                <Image src="/cart.svg" width="40" height="34" alt="cart image" title="cart" />
              </Button>
              <Button 
                title="favorite button" 
                type="button"
                numOfItems={15}
              >
                <Image src="/favorite.svg" width="40" height="34" alt="favorite image" title="favorite" />
              </Button>
              <Modal
                trigger={
                  <Button title="user button" type="button">
                    <Image src="/user.svg" width="40" height="34" alt="user image" title="user" />
                  </Button>
                }
              >
                <Login />
              </Modal>
              
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