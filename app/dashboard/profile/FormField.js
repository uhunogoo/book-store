'use client'
import Form, { Fieldset, InputsRow } from '@/components/NewForm/Form';
import React from 'react';

function FormField() {
  const form = React.useRef();
  const [name, setName] = React.useState('Олена');
  const [surname, setSurName] = React.useState('');
  const [phone, setPhone] = React.useState('+38096666666');
  const [email, setEmail] = React.useState('');
  const [birth, setBirth] = React.useState('');
  const [city, setCity] = React.useState('Вінниця');
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
    <>
      <Form 
        ref={form} 
        handleSubmit={ handleSubmit } 
        style={{ filter: 'none', padding: 0, margin: 0 }}
      >
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
        <InputsRow>
          <Fieldset 
            id="name-field"
            required
            label="Номер телефону"
            error="Ви забули вказати номер телефону"
            value={phone}
            onChange={event => {
              setPhone(event.target.value);
            }}
          />
          <Fieldset 
            id="surname-field"
            required
            label="Адреса електронної пошти"
            error="Ви забули вказати свій email"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </InputsRow>
        <InputsRow>
          <Fieldset 
            id="name-field"
            required
            label="День народження"
            error="Ви забули вказати дату свого народження"
            value={birth}
            onChange={event => {
              setBirth(event.target.value);
            }}
          />
          <Fieldset 
            id="surname-field"
            required
            label="Звідки Ви"
            error="Ви забули вказати звідки Ви"
            value={city}
            onChange={event => {
              setCity(event.target.value);
            }}
          />
        </InputsRow>
        <span style={{
          color: 'var(--text-grey)',
          fontSize: '0.75rem',
          marginTop: '-1rem'
        }}>
        * після заповнення профілю профілю Ваші дані автоматично записуватимуться в карту замовлення
        </span>
      </Form>
    </>
  )
}
export default FormField;