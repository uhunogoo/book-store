import styles from './style.module.css';

import React from 'react';
import Button from '../Button/Button';
import PasswordField from './PasswordField';
import TextField from './TextField';
import Form from '../Form/Form';

function SignInForm({ handleSucces }) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <>
      <Form
        className={ styles.form }
        handleSubmit={ handleSucces }
      >
        <TextField
          label="Ім'я"
          placeholder=""
          value={userName}
          setValue={setUserName}
        />

        <TextField
          type="email"
          label="Адреса електронної пошти"
          placeholder=""
          value={email}
          setValue={setEmail}
        />

        <PasswordField password={password} setPassword={setPassword}>
          <span className={styles.topRight}>Не менше 8 символів</span>
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
