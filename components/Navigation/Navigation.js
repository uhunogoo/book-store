import Link from 'next/link';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

import styles from './navigation.module.css';

function Navigation({ children, navigationList = [], ...delegated }) {
  return (
    <nav {...delegated} >
      <ContentWrapper main={ false } className={ styles.topNavigation } >
          { navigationList.map( ({ link, title }, id) => (
            <NavigationItem key={ title } link={link} title={title}>
              {( id > 0 ) && <span className={ styles.delimiter } /> }
            </NavigationItem>
          ) )}
        </ContentWrapper>
    </nav>
  );
}

function NavigationItem({ title, link, children }) {
  return (
    <>
      { children }
      <Link
        href={link} 
        className={styles.link}
        prefetch={false}
      >
        { title }
      </Link>
    </>
  );
}

export default Navigation;