import { gsap } from 'gsap';
import Image from 'next/image';
import styles from './style.module.css';
import { range } from '@/utils';
import { CartIcon, Close } from '@/components/Icons/Icons';
import { SITE_DATA } from '@/data';
import Button from '@/components/Button/Button';

export default function Page() {
  const { books } = SITE_DATA;
  const wrapedID = gsap.utils.wrap(0, 7);
  const wrapedStatus = gsap.utils.wrap(0, 2);
  return (<>
    <div className={ styles.card }>
      <h2>Список бажань</h2>
      <div className={styles.row}>
        {range(10).map(item => (
          <div key={item} className={styles.wish}>
            <Button className={ styles.close } title="remove">
              <Close width={14} height={14} />
            </Button>
            <div className={ styles.image }>
              <Image 
                src={ books[wrapedID(item)].image.src } 
                width={230} height={315} 
                alt={ books[wrapedID(item)].image.title } 
              />
              <Button title="придбати">
                <CartIcon width={24} height={24} />
              </Button>
            </div>
            { wrapedStatus(item) > 0 ? (
              <span className={ styles.title } style={{ color: 'var(--text-green)' }}>
                Є в наявності
              </span>
            ) : (
              <span className={ styles.title } style={{ color: 'var(--text-grey)' }}>
                Немає 
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  </>);
}