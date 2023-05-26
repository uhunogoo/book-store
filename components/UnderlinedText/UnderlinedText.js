import styles from './style.module.css';

function UnderlinedText({ children, preferMainColor, className = false, preferSelectionColor }) {
  const delegatedClass = className || '';
  const applyedClassName = `${ styles['underlined-text'] } ${ delegatedClass }`;
  
  return (
    <span 
      className={ applyedClassName } 
      style={{ 
        '--prefer-main-color': preferMainColor || '', 
        '--prefer-selection-color': preferSelectionColor || ''
      }} 
    >
      { children }
      <span className={ styles.underline }>
        <span className={ styles['underline-selection'] }></span>
      </span>
    </span>
  )
}

export default UnderlinedText;