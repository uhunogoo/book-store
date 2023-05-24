import styles from './style.module.css';

import React from 'react';
import { DialogDescription } from '@radix-ui/react-dialog';

import Button from '../Button/Button';
import PasswordField from '../Form/PasswordField';
import Form, { Fieldset } from '../Form/Form';
import OrderButton from '../Button/OrderButton';

const SECURE = 1111; 

function ForgetPassword({ handleSucces }) {
  const form = React.useRef();
  const formFinal = React.useRef();
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
          ref={form}
          handleSubmit={ handleSubmit }
          style={{
            padding: 0,
            filter: 'none',
            display: 'grid',
            gap: '1.9rem',
            margin: '0 auto 1.7rem',
            marginTop: '1.9rem',
            maxWidth: '326px',
            width: '100%',
          }}
        >
          { !formSubmited && <StartFlow email={email} setEmail={setEmail} /> }
          
          { formSubmited && !messageWasRead && <ResetMessage email={ email } handleMessage={ handleMessage } /> }
        </Form>
      )}
        
      { messageWasRead && formSubmited && (
        <Form 
          ref={formFinal}
          handleSubmit={ handleSucces }
          style={{
            padding: 0,
            filter: 'none',
            display: 'grid',
            gap: '1.9rem',
            margin: '0 auto 1.7rem',
            marginTop: '1.9rem',
            maxWidth: '326px',
            width: '100%',
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

      <Fieldset
        type="email"
        required
        label="Адреса електронної пошти"
        error="Перевірте це поле"
        placeholder=""
        value={email}
        onChange={event => {
          setEmail(
            event.target.value
          );
        }}
      />
  
      <OrderButton
        type="submit"
        title="до наступного кроку"
        visual="default"
        style={{ margin: '-0.5rem auto 0' }}
      >
        Продовжити
      </OrderButton>
    </>
  );
}
function ResetMessage({ email, handleMessage }) {
  return (
    <>
      <DialogDescription>
        Код підтвердження було успішно відправлено на email: { email }
      </DialogDescription>
      <OrderButton
        visual="outline"
        title="прочитано"
        onClick={ handleMessage }
        style={{ margin: '0 auto' }}
      >
        Далі
      </OrderButton>
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
      <Fieldset
        type="text"
        required
        label="Код підтвердження"
        error="Перевірте це поле"
        placeholder=""
        value={virification}
        onChange={event => {
          setVerification(
            event.target.value
          );
        }}
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
      <OrderButton
        disabled={ !isVerify }
        type="submit"
        title="Підтвердити заміну пароля"
        visual="default"
        style={{ 
          margin: '-0.5rem auto 0', 
          paddingLeft: '1.5rem', 
          paddingRight: '1.5rem', 
          width: 'auto', 
          maxWidth: "none" 
        }}
      >
        Замінити пароль
      </OrderButton>
    </>
  );
}

export default ForgetPassword;