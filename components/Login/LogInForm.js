import React from 'react';

import styles from './style.module.css';

import Button from '../Button/Button';
import PasswordField from './PasswordField';
import TextField from './TextField';
import Form from '../Form/Form';

function LogInForm({ handleSucces, forgetButton }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Form 
      handleSubmit={ handleSucces }
      className={ styles.form }
    >
      <TextField
        type="email"
        label="Адреса електронної пошти"
        placeholder=""
        value={email}
        setValue={setEmail}
      />

      <PasswordField password={password} setPassword={setPassword}>
        { forgetButton }
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
