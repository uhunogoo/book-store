import styles from './style.module.css';

import React from 'react';
import Button from '../Button/Button';
import PasswordField from '../Form/PasswordField';
import Form, { Fieldset } from '../Form/Form';

function SignInForm({ handleSucces }) {
  const form = React.useRef();
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <>
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
          label="Ім'я"
          error="Перевірте це поле"
          type="text"
          placeholder=""
          value={userName}
          onChange={event => {
            setUserName(
              event.target.value
            );
          }}
        />
        <Fieldset
          required
          label="Адреса електронної пошти"
          error="Перевірте це поле"
          type="email"
          placeholder=""
          value={email}
          onChange={event => {
            setEmail(
              event.target.value
            );
          }}
        />
        <PasswordField 
          required
          error="Перевірте це поле"
          password={password} 
          setPassword={setPassword}
        >
          <span className={styles.topRight}>Не менше 8 символів</span>
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
          Реєстрація
        </Button>
      </Form>
    </>
  );
}

export default SignInForm;
