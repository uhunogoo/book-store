"use client"

import React from 'react';

import styles from './style.module.css';

import { useClickOutside } from 'effects/useClickOutside';
import Button from '../Button/Button';
import Scroll from '../Scroll/Scroll';
import { AnimatePresence, motion } from 'framer-motion' 

function SelectBlock({ data }) {
  const generatedID = React.useId();
  const [open, setOpen] = React.useState( false );
  const [genre, setGenre] = React.useState( data[0].title );
  const buttonClass = open ? `${ styles.IconButton } ${ styles.opened }` : styles.IconButton;
  const ref = useClickOutside( setOpen );

  function handleOpen() {
    setOpen( current => !current );
  }

  if (!data) return null;

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <Button 
        onClick={ handleOpen } 
        className={ buttonClass } 
        aria-label="Customise options"
      >
        { genre }
      </Button>
      <AnimatePresence mode='wait'>
        {open && (  
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={ styles.drop } 
            style={{ maxHeight: '225px', height: `${35 * data.length}px` }}
          >
            <Scroll>
              <form key={generatedID} className={ styles.form }>
                <fieldset>
                  {data.map(({title}) => (
                    <div key={title}>
                      <input
                        type="radio"
                        name="current-language"
                        id={title}
                        value={title}
                        checked={title === genre}
                        onChange={event => {
                          setGenre(event.target.value);
                          setOpen( false );
                        }}
                      />
                      <label htmlFor={title} className={ title === genre ? styles.active : '' }>
                        {title}
                      </label>
                    </div>
                  ))}
                </fieldset>
              </form>
            </Scroll>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SelectBlock; 