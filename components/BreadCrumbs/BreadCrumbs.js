import styles from './style.module.css';

export default function BreadCrumbs({array = [], ...delegated}) {
  if (array.length === 0) return;
  return (<>
    <div className={styles.breadCrumbs} {...delegated}>
      <span>Головна</span>
      { array.map(item => 
        <span>{ item }</span>
      ) }
    </div>
  </>);
}