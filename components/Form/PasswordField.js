import styles from './style.module.css';

import React from 'react';
import Image from 'next/image';
import { Fieldset } from './Form';

function PasswordField({ password, info, setPassword, children, ...delegated }) {
  const [passwordVisibility, setPasswordVisibility] =
    React.useState(false);

  function handlePasswordVisibility(e) {
    setPasswordVisibility(!passwordVisibility);
  }

  return (
    <Fieldset 
      label="Пароль"
      required={true}
      {...delegated}
      placeholder=""
      data-error="false"
      type={passwordVisibility ? 'text' : 'password'}
      value={password}
      minLength={8}
      onChange={(event) => {
        setPassword(event.target.value);
      }}
    >

      <VisibilityToggle
        passwordVisibility={passwordVisibility}
        setPasswordVisibility={handlePasswordVisibility}
      />

      {children}
    </Fieldset>
  );
}

function VisibilityToggle({
  passwordVisibility,
  setPasswordVisibility,
}) {
  const visibilityButtonClass = passwordVisibility
    ? styles['active']
    : '';
  return (
    <div
      className={`${styles.visibilityHandle} ${visibilityButtonClass}`}
      onClick={setPasswordVisibility}
    >
      {passwordVisibility ? (
        <Image src="/view.svg" height={14} width={14} alt="view" />
      ) : (
        <Image
          src="/view-crossed.svg"
          height={14}
          width={14}
          alt="view crossed"
        />
      )}
    </div>
  );
}

export default PasswordField;
