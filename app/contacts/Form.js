"use client";

import React from 'react';
import Button from 'components/Button/Button';
// import styles from './style.module.css'
import Form from '/components/NewForm/Form';
import { Fieldset, InputsRow } from '@/components/NewForm/Form';

function FormElement({ children, ...delegated }) {
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
        input.setAttribute('data-error', false);
      });
    }

    setComment('');
    setSurName('');
    setEmail('');
    setName('');
  }

  return (
    <Form ref={form} handleSubmit={ handleSubmit } >
      <InputsRow>
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
          label="Ваше прізвище"
          error="Ви забули вказати своє прізвище"
          value={surname}
          onChange={event => {
            setSurName(event.target.value);
          }}
        />
      </InputsRow>
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
    </Form>
  )
}


export default FormElement;