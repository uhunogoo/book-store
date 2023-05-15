"use client";

import React from 'react';
import Button from 'components/Button/Button';
import styles from './style.module.css'

function FormElement({ ...delegated }) {
  const form = React.useRef();
  const [comment, setComment] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const needValidation = form.current.querySelectorAll('[required]');

    if( needValidation.length ) {
      needValidation.forEach( input => {
        input.classList.remove( styles.invalid );
      });
    }

    setComment('');
    setSurName('');
    setEmail('');
    setName('');
  }
  
  React.useEffect(() => {
    const needValidation = form.current.querySelectorAll('[required]');


    function validation(event) {
      event.target.classList.add( styles.invalid );
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
  }, [ styles ]);

  return (
    <form ref={form} onSubmit={handleSubmit} className={ styles.form }>

      <div className={ styles.row }>
        <Fieldset 
          id="name-field"
          required
          label="Ваше ім'я"
          error="Ви забули вказати своє ім'я"
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
        <Fieldset 
          id="surname-field"
          required
          label="Ваша фамілія"
          error="Ви забули вказати свою фамілію"
          value={surname}
          onChange={event => {
            setSurName(event.target.value);
          }}
        />
      </div>
      <Fieldset 
        id="email-field"
        required
        label="Пошта"
        error="Ви забули вказати свій email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <Fieldset
        required
        label="Ваше повідомлення"
        error="Ви забули заповнити це поле"
        tag="textarea"
        rows={4}
        value={comment}
        onChange={event => {
          setComment(
            event.target.value
          );
        }}
      />

      <Button 
        visual="default" 
        title="відправити своє повідомлення"
        style={{ margin: '0 0 0 auto' }}
      >
        Відправити
      </Button>
    </form>
  )
}
function Fieldset({ id, label, error, tag, ...delegated }) {
  const generatedId = React.useId();
  const appliedId = id || generatedId;
  const Tag = tag || 'input';

  return (
    <fieldset>
      <Tag
        id={ appliedId }
        placeholder=""
        {...delegated}
      />
      <label htmlFor={ appliedId }>
        { label }:
      </label>
      { !!error && <span className={ styles.error }>{ error }</span>  }
    </fieldset>
  );
}

export default FormElement;