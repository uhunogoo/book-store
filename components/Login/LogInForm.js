import styles from './style.module.css';

import React from 'react';
import Button from '../Button/Button';
import PasswordField from './PasswordField';
import TextField from './TextField';
import Form from '../Form/Form';
import { DialogClose } from '@radix-ui/react-dialog';

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
      <DialogClose asChild disabled={ !password|| !email } >
        <Button
          type="submit"
          title="search button"
          visual="default"
          style={{ marginTop: '-0.5rem' }}
        >
          Вхід
        </Button>
      </DialogClose>
    </Form>
  );
}

export default LogInForm;
