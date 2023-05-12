"use client";

import React from 'react';
import { gsap } from 'gsap';
import { CSSTransition } from 'react-transition-group';

import styles from './drop-down.module.css'

import DecoratedBooks from '../DecoratedBooks/DecoratedBooks';
import DropDownContent from './DropDownContent';
import Button from '../Button/Button';

gsap.registerEffect({
  name: "openMenu",
  effect(targets) {
    const dropDown = targets;
    const q = gsap.utils.selector(dropDown);  
    const listItems = q('a');
    gsap.set(listItems, { opacity: 1, yPercent: 0, rotate: '0deg' });
    
    const animation = gsap.timeline();
    animation.fromTo(q('.gsapDorp'), {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    }, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      duration: 0.6 
    });
    animation.from(listItems, {
      opacity: 0,
      yPercent: 100,
      x: 40,
      rotate: '-5deg',
      stagger: {
        ease: 'sine.out',
        each: 0.02,
        grid: [2, 9],
        from: 'start'
      }
    }, 0);
    animation.from(q('.gsapBooks'), {
      skewX: '10deg',
      backgroundPositionX: '-=200px',
      ease: 'power1',
      duration: 1
    }, '>-=50%');

    return animation;
  }
});
gsap.registerEffect({
  name: "closeMenu",
  effect(targets) {
    const dropDown = targets;
    const q = gsap.utils.selector(dropDown);  
    const listItems = q('a');
    const animation = gsap.timeline();
    animation.fromTo(q('.gsapDorp'), { 
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    }, { 
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 0.6 
    });
    animation.to(listItems, {
      opacity: 0,
      yPercent: 100,
      x: 20,
      rotate: '-5deg',
      stagger: {
        each: 0.02,
        grid: [2, 9],
        from: 'end'
      }
    }, 0);

    return animation;
  }
});

function DropDown({ data }) {
  const ctx = React.useMemo( () => gsap.context(() => {}), []);

  const [ dropDownStatus, setDropDownStatus ] = React.useState( false );
  const activeClass = dropDownStatus ? styles.active : ''
  const buttonClass = `${styles.dropDownButton} ${activeClass}`;
  
  function handleClick() {
    setDropDownStatus( !dropDownStatus );
  }

  React.useLayoutEffect(() => {
    ctx.add('open', (node) => {
      return gsap.effects['openMenu']( node, {});
    });
    ctx.add('close', (node) => {
      return gsap.effects['closeMenu']( node, {});
    });

    return () => ctx.revert();
  }, []);

  const handleOnEnter = (node) => ctx.open( node );
  const handleOnExit = (node) => ctx.close( node );

  return (
    <>
      <div className={ styles.dropContainer }>
        <Button
          onClick={ handleClick }
          title="user button" 
          type="button"
          className={ buttonClass }
          >
          Каталог
          {' '}
          <span className={ styles.arrow }></span>
        </Button>

        <CSSTransition
          in={ dropDownStatus }
          unmountOnExit
          onEnter={handleOnEnter}
          onExit={handleOnExit}
          timeout={800}
        >
          <DropDownContent data={ data } className="gsapDorp">
            <DecoratedBooks className="gsapBooks" style={{ margin: '1.75rem -1.2rem -1.5rem -1.2rem' }} />
          </DropDownContent>
        </CSSTransition>
      </div>
    </>
  );
}

export default React.memo( DropDown );