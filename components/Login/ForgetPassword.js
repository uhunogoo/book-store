import styles from './style.module.css';

import React from 'react';
import { DialogClose, DialogDescription } from '@radix-ui/react-dialog';

import Button from '../Button/Button';
import TextField from './TextField';
import PasswordField from './PasswordField';
import Form from '../Form/Form';

const SECURE = 1111; 

function ForgetPassword({ handleSucces }) {
  const [email, setEmail] = React.useState('');
  const [ messageWasRead, setMessageWasRead ] = React.useState( false );
  
  const [formSubmited, setFormSubmited] = React.useState( false );
  

  function handleMessage () {
    setMessageWasRead( true );
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFormSubmited( true );
  }
  
  
  return (
    <>
      { (!messageWasRead || !formSubmited) && (
        <Form
          className={ styles.form }
          handleSubmit={ handleSubmit }
          style={{
            marginBottom: '1.7rem'
          }}
        >
          { !formSubmited && <StartFlow email={email} setEmail={setEmail} /> }
          
          { formSubmited && !messageWasRead && <ResetMessage email={ email } handleMessage={ handleMessage } /> }
        </Form>
      )}
        
      { messageWasRead && formSubmited && (
        <Form 
          className={ styles.form }
          handleSubmit={ handleSucces }
          style={{
            marginBottom: '1.7rem'
          }}
        >
          <ResetPassword />
        </Form>
      ) }
    </>
  );
}

function StartFlow({ email, setEmail }) {
  return (
    <>
      <DialogDescription>
        Введіть email щоб ми відправили вам код підтвердження:
      </DialogDescription>

      <TextField
        type="email"
        label="Адреса електронної пошти"
        placeholder=""
        value={email}
        setValue={setEmail}
      />
  
      <Button
        type="submit"
        title="search button"
        visual="default"
        style={{ marginTop: '-0.5rem' }}
      >
        Продовжити
      </Button>
    </>
  );
}
function ResetMessage({ email, handleMessage }) {
  return (
    <>
      <DialogDescription>
        Код підтвердження "{ SECURE }" було успішно відправлено на email: { email }
      </DialogDescription>
      <Button
        visual="outline"
        title="прочитано"
        onClick={ handleMessage }
      >
        Далі
      </Button>
    </>
  )
}
function ResetPassword() {
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');
  const [virification, setVerification] = React.useState('');
  
  const isVerify = virification === '' + SECURE;
  
  return (
    <>
      <DialogDescription>
        Створіть новий пароль:
      </DialogDescription>
      <TextField
        type="text"
        label="Код підтвердження"
        placeholder=""
        value={virification}
        setValue={setVerification}
      />
      <PasswordField 
        label="Новий пароль"
        disabled={ !isVerify }
        password={password} 
        setPassword={setPassword}
      >
        <span className={styles.topRight}>Не менше 8 символів</span>
      </PasswordField>
      <PasswordField 
        label="Повторіть пароль"
        disabled={ !isVerify }
        password={repeatPassword} 
        setPassword={setRepeatPassword} 
      />
      <Button
        disabled={ !isVerify }
        type="submit"
        title="search button"
        visual="default"
        style={{ marginTop: '-0.5rem' }}
      >
        Продовжити
      </Button>
    </>
  );
}

export default ForgetPassword;