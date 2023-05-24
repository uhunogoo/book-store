import Link from 'next/link';
import styles from './style.module.css';

function BreadCrumbs({children, ...delegated}) {
  if (!children) return null;
  
  return (<>
    <nav aria-label="Breadcrumbs" className={styles.breadCrumbs} {...delegated}>
      <Link href="/">Головна</Link>
      { children }
    </nav>
  </>);
}

function Crumb({ href = false, children }) {
  if( href ) {
    return<Link href={href}>{ children }</Link>
  }
  return  <span>{ children }</span>;
}

BreadCrumbs.Crumb = Crumb;

export default BreadCrumbs;