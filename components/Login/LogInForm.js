import React from 'react';

import styles from './style.module.css';

import Button from 'components/Button/Button';
import PasswordField from '@/components/Form/PasswordField';
import Form, { Fieldset } from '@/components/Form/Form';

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
      <Button
        type="submit"
        title="search button"
        visual="default"
        style={{ marginTop: '-0.5rem' }}
      >
        Вхід
      </Button>
    </Form>
  );
}

export default LogInForm;
