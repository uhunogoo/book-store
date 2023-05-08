"use client";
import React from 'react';
import Image from 'next/image';
import { DialogTitle } from '@radix-ui/react-dialog';

import styles from './style.module.css';


import Button from '../Button/Button';
import LogInForm from './LogInForm';
import SignInForm from './SignInForm';
import ForgetPassword from './ForgetPassword';

function UserForm() {
  const [succes, setSucces] = React.useState( false );
  const [formType, setFormType] = React.useState( 'login' );

  function handleRegisterForm( value ) {
    const newValue = value === 'register' ? 'register' : 'resetPassword';
    setFormType( newValue );
  }

  function handleSucces(e) {
    e.preventDefault();
    setSucces( true );
  }

  if ( succes ) {
    return (
      <DialogTitle className={ `${styles.DialogTitle} ${ styles.greeting }` }>
        { formType === 'register' && 'Ваш акаунт успішно активовано.' }
        { formType === 'resetPassword' && 'Ваш пароль успішно замінено.' }
      </DialogTitle>
    );
  }

  return (
    <>
      <DialogTitle className={ styles.DialogTitle }>
        { formType === 'login' && 'Вхід в акаунт' }
        { formType === 'register' && 'Реєстрація' }
        { formType === 'resetPassword' && 'Забули пароль' }
      </DialogTitle>

      {formType === 'login' && (
        <LogInForm handleSucces={ handleSucces } forgetButton={
          <a 
            href="#" 
            className={styles.topRight} 
            onClick={ () => handleRegisterForm('forget') }
          >
            Забули пароль?
          </a>
        }/> 
      )}

      { formType === 'register' && <SignInForm handleSucces={ handleSucces } /> }
      { formType === 'resetPassword' && <ForgetPassword handleSucces={ handleSucces }/> }

      { formType !== 'resetPassword' && (
        <div className={styles.bottom}>
          { formType === 'login' && (
            <>
              <span>У вас немає свого облікового запису?</span>
              <Button
                aria-label="Registration"
                title="Реєстрація"
                type="button"
                visual="outline"
                onClick={ () => handleRegisterForm('register') }
              >
                Реєстрація
              </Button>
            </>
          )}
          <div>
            <h3>
              Зайти через:
            </h3>
            <div className={styles.social}>
              <Button>
                <Image src="/google.svg" height={20} width={20} alt="icon"/>
                Google
              </Button>
              <Button>
                <Image src="/facebook.svg" height={20} width={20} alt="icon"/>
                Facebook
              </Button>
              <Button>
                <Image src="/twitter.svg" height={20} width={20} alt="icon"/>
                Twitter
              </Button>
            </div>
          </div>
      </div>
      )}
    </>
  );
}

export default UserForm;
