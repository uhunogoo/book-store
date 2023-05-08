import styles from './content-wrapper.module.css'

function ContentWrapper({ children, main = true, className}) {
  const Tag = main ? 'main' : 'div';
  const computedClass = `${styles.contentWrapper} ${ className }`;

  return (
    <Tag className={ computedClass }>
      { children }
    </Tag>
  );
}

export default ContentWrapper;