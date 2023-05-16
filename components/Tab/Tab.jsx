'use client'

import React from 'react';
import Button from '../Button/Button';
import { animated, useTransition } from '@react-spring/web';

import styles from './sstyle.module.css'
import { useControls } from 'leva';

function Tab({ tabs }) {
  const [ currentTab, setCurrentTab ] = React.useState( 0 );
  const [ direction, setDirection ] = React.useState('next');

  const [ tabsTitles, tabsContent ] = React.useMemo(() => {
    const titles = [];
    const contents = [];

    tabs.forEach( ({ title, content }) => {
      titles.push(title);
      contents.push(content);
    });
    return [ titles, contents ];
  }, [tabs]);
  
  
  function handleVisibleTab(newID) {
    if ( newID === currentTab ) return;
    setDirection(() => newID > currentTab ? 'next' : 'prev');
    setCurrentTab( newID );
  }

  return (
    <div className="tabs">
      <div className="tabsRow">
        { tabsTitles.map((tab, id) => (
          <Button
            key={id} 
            title={ tab } 
            style={{ background: 'red', margin: '1rem', padding: '0.5rem' }}
            onClick={ () => handleVisibleTab(id) }
          >
            { tab }
          </Button>
        )) }
      </div>
      <TabContent tabsContent={ tabsContent } currentTab={currentTab} direction={ direction }/>
    </div>
  )
}

function TabContent({ tabsContent, currentTab, direction }) {
  const d = direction === 'prev' ? -1 : 1;
  const controls = useControls('Табуляція', {
    scale: { value: 1.2, min: 0.8, max: 2, step: 0.1 },
    x: { value: 30, min: -100, max: 100, step: 1 },
    skew: { value: 5, min: -30, max: 30, step: 1 },
    mass: { value: 0.8, min: 0.1, max: 2, step: 0.1 },
    tension: { value: 600, min: 400, max: 1000, step: 1 },
    friction: { value: 40, min: 20, max: 120, step: 1 },
  })
  const value = { 
    scale: 1.2,
    x: 30, 
    skew: 5,
    mass: 0.8,
    tension: 600,
    friction: 40,
    ...controls
  }

  
  const transitions = useTransition(currentTab, {
    keys: currentTab,
    exitBeforeEnter: true,
    from: {  
      filter: 'blur(0.7rem)',
      opacity: 0,
      transform: `scaleX(${value.scale}) skewX(${value.skew * 1.5* d}deg) translate3d(${value.x* d}%,0,0)` 
    },
    enter: {
      filter: 'blur(0)',
      opacity: 1,
      transform: 'scaleX(1) skewX(0deg) translate3d(0%,0,0)' 
    },
    leave: { 
      filter: 'blur(0.8rem)', 
      opacity: 0,
      transform: `scaleX(${value.scale}) skewX(${value.skew * 1.5* d}deg) translate3d(${-value.x * d}%,0,0)`,
    },
    config: {
      mass: value.mass,
      tension: value.tension,
      friction: value.friction
    }
  });

  return (
    <div className={styles.wrapper}>
      {transitions((style, i) => (
        <animated.div key={i} style={ style } className={styles.content}>
          { tabsContent[i] }
        </animated.div>
      ))}
    </div>
  );
}

export default Tab;