'use client';
import React from 'react';
import Button from '../Button/Button';

function Counter({ exist = 1, className}) {
  const [ count, setCount ] = React.useState( exist );
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    const newCount = count - 1;
    if (newCount < 1) return;

    setCount(newCount);
  }
  return (
    <div className={className} >
      <Button
        title='Менше'
        onClick={decrementCount}
        >
        -
      </Button>
      <div style={{ fontFamily: 'var(--rochester)' }}>
        { count }
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