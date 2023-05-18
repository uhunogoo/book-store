'use client'

import React from 'react';
import Button from '../Button/Button';
import { animated, config, useChain, useSpring, useSpringRef, useTransition } from '@react-spring/web';

import styles from './style.module.css';

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
      <div className={ styles.tabsRow }>
        { tabsTitles.map((tab, id) => (
          <TabNav
            key={id}
            text={ tab } 
            title={ tab } 
            className={ `${styles.button} ${currentTab === id ? styles.active : ''}` }
            onClick={ () => handleVisibleTab(id) }
          >
            {( id > 0 ) && <span className={ styles.delimiter } /> }
          </TabNav>
        )) }
      </div>
      <TabContent tabsContent={ tabsContent } currentTab={currentTab} direction={ direction }/>
    </div>
  )
}

function TabNav({ children, text, ...delegated }) {
  return (
    <>
      { children }
      <Button
        {...delegated}
      >
        { text }
      </Button>
    </>
  );
}

function TabContent({ tabsContent, currentTab, direction }) {
  const d = direction === 'prev' ? -1 : 1;
  const [status, setStatus] = React.useState(true); 
  

  const testRef = useSpringRef();
  const props = useSpring({
    ref: testRef,
    key: null,
    from: {
      filter: `blur(${status ? 0 : 0.5}rem)`,
      transform: `translateX(${status ? 0 : 100 * d }px)`
    },
    to: {
      filter: `blur(${status ? 0.5 : 0}rem)`,
      transform: `translateX(${status ? 100 * d : 0 }px)` 
    },
  });
  const transitionRef = useSpringRef();
  const transitions = useTransition(currentTab, {
    ref: transitionRef,
    key: null,
    from: {
      opacity: 0,
      transform: `translateX(${ 400 * d }px)`
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0px)'
    },
    leave: {
      opacity: 0,
      transform: `translateX(${ -400 * d }px)`
    },
    config: config.default,
    exitBeforeEnter: true,
    onStart: () => {
      setStatus( currentStatus => !currentStatus );
    },
    onDestroyed: () => {
      setStatus( true );
    }
  });
  
  useChain( status ? [ testRef, transitionRef ] : [ transitionRef, testRef ], [0, 0]);

  return (
    <div className={styles.wrapper}>
      {transitions((style, i) => (
        <animated.div key={i} style={ style } className={styles.content}>
          <animated.div style={props}>
            { tabsContent[i] }
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default Tab;