'use client'
import styles from './content-wrapper.module.css'

function ContentWrapper({ children, main = true, className, ...delegated}) {
  const Tag = main ? 'main' : 'div';
  const computedClass = `${styles.contentWrapper} ${ className }`;

  return (
    
    <Tag {...delegated} className={ computedClass }>
      { children }
    </Tag>
  );
}

export default ContentWrapper;