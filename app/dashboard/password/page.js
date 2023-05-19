'use client'
import React from "react";

import Button from "@/components/Button/Button";
import PasswordField from "@/components/Login/PasswordField";
import Form from "@/components/NewForm/Form";

import styles from './styles.module.css';
import Rating from "@/components/Rating/Rating";
import Image from "next/image";

export default function Page() {
  const form = React.useRef();
  const [ oldPassword, setOldPassword ] = React.useState('');
  const [ newPassword, setNewPassword ] = React.useState('');
  const [ repeatNewPassword, setRepeatNewPassword ] = React.useState('');

  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Бажаєте змінити пароль?</h2>
        <Form ref={ form }style={{ filter: 'none', display: 'grid', gap: 'var(--size-30)' }}>
          <PasswordField 
            password={oldPassword} 
            setPassword={setOldPassword} 
            label="Старий пароль"
          >
            <span className={ styles.error }>
              Перевірте це поле
            </span>
          </PasswordField>
          <PasswordField 
            password={newPassword} 
            setPassword={setNewPassword} 
            label="Новий пароль"
          >
            <span className={ styles.error }>
              Перевірте це поле
            </span>
          </PasswordField>
          <PasswordField 
            password={repeatNewPassword} 
            setPassword={setRepeatNewPassword} 
            label="Повторіть пароль"
          >
            <span className={ styles.error }>
              Перевірте це поле
            </span>
          </PasswordField>
          <Button visual="default" style={{ margin: '0 0 0 auto' }}>
            Змінити
          </Button>
        </Form>
      </div>
      <div>
        <Image src="/photo.jpg" width={150} height={195} style={{border: '2px solid var(--text-green)'}} alt="зображення користувача" />
        <div 
          style={{ 
            display: 'flex',
            fontSize: 'var(--text-small)', 
            justifyContent: 'space-between', 
            color: 'var(--text-grey)',
            margin: '1.1rem 0 0.5rem'
          }}
        >
          <span>
            Ваш рейтинг:
          </span>
          <span>
            8.1
          </span>
        </div>
        <Rating rating={4} />
      </div>
    </div>
  )
}