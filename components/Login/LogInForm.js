import React from 'react';

import styles from './style.module.css';

import Button from 'components/Button/Button';
import PasswordField from '@/components/Form/PasswordField';
import Form, { Fieldset } from '@/components/Form/Form';
import OrderButton from '../Button/OrderButton';

function LogInForm({ handleSucces, forgetButton }) {
  const form = React.useRef();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Form
      ref={form}
      handleSubmit={ handleSucces }
      style={{
        padding: 0,
        filter: 'none',
        display: 'grid',
        gap: '1.9rem',
        margin: '0 auto',
        marginTop: '1.9rem',
        maxWidth: '326px',
        width: '100%',
      }}
    >
      <Fieldset
        required
        label="Адреса електронної пошти"
        error="Перевірте це поле"
        type="email"
        value={email}
        placeholder=""
        onChange={event => {
          setEmail(
            event.target.value
          );
        }}
      />
      <PasswordField 
        error="Перевірте це поле"
        password={password} 
        setPassword={setPassword}
      >
        { forgetButton }
        <span className={ styles.error }>
          Перевірте це поле
        </span>
      </PasswordField>
      <OrderButton
        type="submit"
        title="увійти в акаунт"
        visual="default"
        style={{ margin: '-0.5rem auto 0' }}
      >
        Вхід
      </OrderButton>
    </Form>
  );
}

export default LogInForm;
