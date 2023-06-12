'use client'
import React from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

import FormField from './FormField';
import Propositions from './Propositions';

import Rating from 'components/Rating/Rating';
import Button from 'components/Button/Button';
import CommentsBlock from './CommentsBlock';
import UnderlinedText from '@/components/UnderlinedText/UnderlinedText';
import DropDownArrow from 'components/DropDown/DropDownArrow';


export default function Page() {
  const [showComments, setShowComments] = React.useState( false );
  function handleClick() {
    setShowComments(!showComments);
  }
  return (
    <>
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 150px',
          gap: '2.8rem'
        }}
      >
        <div>
          <FormField />
          <div style={{ marginTop: 'var(--size-30)' }}>
            <span>Дата реєстрації:</span>
            {' '}
            <span style={{ fontFamily: 'var(--rochester)' }}>01.06.2020</span>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <span>Номер клубної картки:</span>
            {' '}
            <span style={{ fontFamily: 'var(--rochester)' }}>4567890908</span>
          </div>
          <div style={{ 
              marginTop: '0.5rem', 
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem' 
          }}>
            <span>Оцінки та відгуки:</span>
            {' '}
            <span style={{ fontFamily: 'var(--rochester)' }}>9</span>
            {' '}
            <Button 
              title="показати" 
              onClick={handleClick}
              className={ styles.moreComments }
            >
                <UnderlinedText>
                  показати
                </UnderlinedText>
                <DropDownArrow 
                  opened={ showComments } 
                  type="options" 
                  style={{
                    position: 'relative',
                    translate: showComments ? '0 -30%' : '0 30%'
                  }}
                />
              </Button>
          </div>
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
            <span style={{ fontFamily: 'var(--rochester)' }}>
              8.1
            </span>
          </div>
          <Rating rating={4} />
        </div>
      </div>
      
      { showComments &&(
        <div className={styles.comments}>
          <CommentsBlock />
        </div>
      )}

      <Propositions/>
    </>
  );
}
