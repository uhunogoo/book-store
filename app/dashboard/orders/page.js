'use client'
import React from 'react';
import Button from 'components/Button/Button';
import Form, { Fieldset } from '@/components/Form/Form';

import styles from './style.module.css';
import { currencyFormat } from '@/utils';

export default function Page() {
  const form = React.useRef(); 
  const [orderSku, setOrderSku] = React.useState('');
  return (
    <>
      <Form ref={form} className={ styles.form }>
        <Fieldset
          id="surname-field"
          required
          placeholder="Введіть код замовлення "
          error="Перевірте це поле"
          style={{ borderColor: 'var(--border-grey)' }}
          value={orderSku}
          onChange={(event) => {
            setOrderSku(event.target.value);
          }}
        />
        <Button title="Відстежити">Відстежити</Button>
      </Form>
      <h2 style={{ fontSize: 'var(--text-size)', marginTop: '1.7rem' }}>Мої замовлення:</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 'var(--text-size)',
        marginTop: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--rochester)' }}>
            1
          </div>
          <div>
            <div>“После” - Анна Тодд</div>
            <div>“Переконання” - Роберт Чалдіні</div>
          </div>
        </div>
        <div>
          <span style={{ fontFamily: 'var(--rochester)' }}>
            05.05.2022
          </span>
        </div>
        <div>
          <span style={{ fontFamily: 'var(--rochester)' }}>
            { currencyFormat.format(450) }
          </span>
        </div>
        <div>
          <Button 
            title="Додати коментар" 
            style={{ 
              fontSize: '0.75rem', 
              textDecoration: 'underline', 
              color: 'var(--text-grey)' 
            }}
          >
            Додати коментар
          </Button>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 'var(--text-size)',
        marginTop: '1rem'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--rochester)' }}>
            2
          </div>
          <div>
            <div>“После” - Анна Тодд</div>
            <div>“Переконання” - Роберт Чалдіні</div>
          </div>
        </div>

        <div>
          <span style={{ fontFamily: 'var(--rochester)' }}>
            05.05.2022
          </span>
        </div>
        <div>
          <span style={{ fontFamily: 'var(--rochester)' }}>
            { currencyFormat.format(450) }
          </span>
        </div>
        <div>
          <Button 
            title="Додати коментар" 
            style={{ 
              fontSize: '0.75rem', 
              textDecoration: 'underline', 
              color: 'var(--text-grey)' 
            }}
          >
            Додати коментар
          </Button>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 'var(--text-size)',
        marginTop: '1rem',
        marginBottom: '130px'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--rochester)' }}>
            3
          </div>
          <div>
            <div>“После” - Анна Тодд</div>
            <div>“Переконання” - Роберт Чалдіні</div>
            <div>“Переконання” - Роберт Чалдіні</div>
          </div>
        </div>
        <div>
          <span style={{ fontFamily: 'var(--rochester)' }}>
            09.3.2023
          </span>
        </div>
        <div>
          <span style={{ fontFamily: 'var(--rochester)' }}>
            { currencyFormat.format(743) }
          </span>
        </div>
        <div>
          <Button 
            title="Додати коментар" 
            style={{ 
              fontSize: '0.75rem', 
              textDecoration: 'underline', 
              color: 'var(--text-grey)' 
            }}
          >
            Додати коментар
          </Button>
        </div>
      </div>
    </>
  );
}
