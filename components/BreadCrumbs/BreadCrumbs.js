import Link from 'next/link';
import styles from './style.module.css';

export default function BreadCrumbs({array = [], ...delegated}) {
  if (array.length === 0) return;
  
  return (<>
    <nav aria-label="Breadcrumbs" className={styles.breadCrumbs} {...delegated}>
      <Link href="/">Головна</Link>
      { array.map(({text, src}, i) => {
        const isLast = i === (array.length - 1);
        if (isLast) {
          return <span key={i}>{ text }</span>;
        }
        return <Link key={i} href={src}>{ text }</Link>;
      } )}
    </nav>
  </>);
}