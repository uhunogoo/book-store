import Link from 'next/link';
import ContentWrapper from '../ContentWrapper/ContentWrapper';

import styles from './navigation.module.css';

function Navigation({ children, navigationList = [], ...delegated }) {
  return (
    <nav {...delegated} >
      <ContentWrapper main={ false } className={ styles.topNavigation } >
          { navigationList.map( ({ link, title }, id) => {
            const isLastItem = (navigationList.length - 1) === id;
            return (
              <>
                <Link 
                  key={ title } 
                  href={link} 
                  className={styles.link}
                  prefetch={false}
                >
                  { title }
                </Link>
                {!isLastItem && (
                  <span className={ styles.delimiter } />
                ) }
              </>
            );
          }) }
        </ContentWrapper>
    </nav>
  );
}

export default Navigation;