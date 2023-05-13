"use client";
import Button from 'components/Button/Button';
import styles from './style.module.css'
import React from 'react';

function FormElement({ ...delegated }) {
  const [comment, setComment] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(e) {
    console.log( e )
    // e.preventDefault();

    setComment('');
    setSurName('');
    setEmail('');
    setName('');
  }
  
  React.useEffect(() => {
    const nameInput = document.querySelector('#name-field');
    function validation() {
      console.log( 'wrong' )
    } 
    nameInput.addEventListener('invalid', validation);
    
    return () => {
      nameInput.removeEventListener('invalid', validation);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className={ styles.form }>

      <div className={ styles.row }>
        <fieldset name='name'>
          <label htmlFor="name-field">
            Ім'я:
          </label>
          <input
            id="name-field"
            required
            placeholder="Ваше ім'я..."
            value={name}
            onChange={event => {
              setName(event.target.value);
            }}
          />
          <span className={ styles.error }>Введіть Ваше ім'я</span>  
        </fieldset>
        <fieldset>
          <label htmlFor="surname-field">
            Фамілія:
          </label>
          <input
            id="surname-field"
            placeholder="Ваша Фамілія..."
            required
            value={surname}
            onChange={event => {
              setSurName(event.target.value);
            }}
          />
        </fieldset>
      </div>
      <fieldset>
        <label htmlFor="email-field">
          Пошта:
        </label>
        <input
          id="email-field"
          placeholder="Ваш email..."
          required
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
      </fieldset>
      
      <fieldset>
        <label htmlFor="comment-field">
          Ваше повідомлення:
        </label>
        <textarea
          id="comment-field"
          value={comment}
          onChange={event => {
            setComment(
              event.target.value
            );
          }}
        />
      </fieldset> 

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

export default FormElement;