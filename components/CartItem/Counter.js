'use client';
import React from 'react';
import Button from '../Button/Button';

function Counter({ exist = 1, handleCount, className}) {
  function incrementCount() {
    handleCount( exist + 1 )
  }
  function decrementCount() {
    const newCount = exist - 1;
    if (newCount < 1) return;
    handleCount( newCount );
  }
  return (
    <div className={className} >
      <Button
        title='Менше'
        style={{ opacity: exist === 1 ? 0.7 : 1 }}
        onClick={decrementCount}
        >
        -
      </Button>
      <div style={{ fontFamily: 'var(--rochester)', textAlign: 'center', width: '1rem'}}>
        { exist }
      </div>
      <Button
        title='Більше'
        onClick={incrementCount}
      >
        +
      </Button>
    </div>
  )
}
export default Counter;