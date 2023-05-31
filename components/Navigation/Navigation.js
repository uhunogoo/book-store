'use client';

import Link from 'next/link';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

import styles from './navigation.module.css';
import { usePathname } from 'next/navigation';

function Navigation({ needLinkChecking = false, children, navigationList = [], ...delegated }) {
  return (
    <nav {...delegated} >
      <ContentWrapper main={ false } className={ styles.topNavigation } >
          { navigationList.map( ({ link, title }, id) => (
            <NavigationItem key={ title } chechLink={ needLinkChecking } link={link} title={title}>
              {( id > 0 ) && <span className={ styles.delimiter } /> }
            </NavigationItem>
          ) )}
        </ContentWrapper>
    </nav>
  );
}

export function NavigationItem({ title, link, chechLink = false, children }) {
  const pathname = usePathname();
  const isActive = pathname === link;
  const activeClass = isActive ? styles.active : '';
  const applyedCalss = chechLink ? `${styles.link} ${ activeClass }` : styles.link; 

  return (
    <>
      { children }
      <Link
        href={link} 
        className={ applyedCalss }
        // prefetch={false}
      >
        { title }
      </Link>
    </>
  );
}

export default Navigation;