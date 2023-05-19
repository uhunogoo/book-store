import React from 'react';
import styles from './style.module.css';

function Form({ children, handleSubmit, ...delegated }, ref) {
  React.useEffect(() => {
    const needValidation = ref.current.querySelectorAll('[required]');

    function validation(event) {
      event.target.setAttribute('data-error', true);
    }

    if( needValidation.length ) {
      needValidation.forEach( input => {
        input.addEventListener('invalid', validation);
      });
    }
    
    return () => {
      if( needValidation.lenght ) {
        needValidation.forEach( input => {
          input.removeEventListener('invalid', validation);
        });
      }
    }
  }, [ ref ]);

  return (
    <form ref={ref} onSubmit={handleSubmit} className={ styles.form } {...delegated}>
      { children }
    </form>
  );
}
export function InputsRow({ children }) {
  return(
    <div className={ styles.row }>
      { children }
    </div>
  )
}
export function Fieldset({ id, label, error, tag, children, ...delegated }) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;
  const Tag = tag || 'input';

  return (
    <fieldset>
      <Tag
        id={ appliedId }
        placeholder=""
        data-error="false"
        {...delegated}
      />
      {!!label && (
        <label htmlFor={ appliedId }>
          {label}
        </label>
      )}
      { !!error && <span className={ styles.error }>{ error }</span>  }
      { children }
    </fieldset>
  );
}

export default React.forwardRef( Form );