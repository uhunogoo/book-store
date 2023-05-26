"use client";
import React from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';

import styles from './style.module.css';


import Button from '../Button/Button';
import LogInForm from './LogInForm';
import SignInForm from './SignInForm';
import ForgetPassword from './ForgetPassword';
import { Facebook, Google, Twitter } from '../Icons/Icons';
import { useRouter } from 'next/navigation';
import UnderlinedText from '../UnderlinedText/UnderlinedText';

function UserForm({ setOpen }) {
  const [succes, setSucces] = React.useState( false );
  const [formType, setFormType] = React.useState( 'login' );
  const router = useRouter();

  function handleRegisterForm( value ) {
    const newValue = value === 'register' ? 'register' : 'resetPassword';
    setFormType( newValue );
  }

  function handleSucces(e) {
    e.preventDefault();
    setSucces( true );
  }
  function handleLogin(e) {
    e.preventDefault();
    router.push('/dashboard/profile');
    setOpen( false );
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
        <LogInForm handleSucces={ handleLogin } forgetButton={
          <a 
            href="#" 
            className={styles.topRight} 
            onClick={ () => handleRegisterForm('forget') }
          >
            <UnderlinedText>Забули пароль?</UnderlinedText>
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
                <Google color={'var(--text-green)'} width={24} height={24} />
              </Button>
              <Button>
                <Facebook color={'var(--text-green)'} width={24} height={24} />
              </Button>
              <Button>
                <Twitter color={'var(--text-green)'} width={24} height={24} />
              </Button>
            </div>
          </div>
      </div>
      )}
    </>
  );
}

export default UserForm;
