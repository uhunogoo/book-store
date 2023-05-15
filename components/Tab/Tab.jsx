'use client'

import React from 'react';
import Button from '../Button/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { gsap } from 'gsap';

function Tab({ tabs }) {
  // const [ currentTab, setCurrentTab ] = React.useState({ id: 0, motion: 'next' });
  const [ currentTab, setCurrentTab ] = React.useState( 0 );

  const [ tabsTitles, tabsContent ] = React.useMemo(() => {
    const titles = [];
    const contents = [];

    tabs.forEach( ({ title, content }) => {
      titles.push(title);
      contents.push(content);
    });
    return [ titles, contents ];
  }, [tabs]);
  
  function handleVisibleTab(id) {
    setCurrentTab( id );
  }

  // const handleOnEnter = (node) => {
  //   const value = currentTab.motion === 'prev' ? 100 : -100;
  //   gsap.set(node, { opacity: 0, xPercent: value });
  // };

  // const handleOnEntering = (node) => {
  //   gsap.to(node, { opacity: 1, xPercent: 0, duration: 0.5 });
  // };
    
  // const handleOnExit = (node) => {
  //   gsap.set(node, { opacity: 1, xPercent: 0 });
  // };
  // const handleOnExiting = (node) => {
  //   const value = currentTab.motion === 'prev' ? 100 : -100;
  //   console.log( 'handleOnExiting' )
  //   gsap.to(node, { opacity: 0, xPercent: value, duration: 0.2 });
  // };
  const handleOnEnter = (node) => {
    console.log( 'enter: ' + currentTab )
    // console.log( 'ent: ' + currentTab.motion )
    // const value = currentTab.motion === 'prev' ? 100 : -100;
    // gsap.from(node, { opacity: 0, xPercent: value, duration: 0.2 });
  }
  const handleOnExit = (node) => {
    console.log( 'exit: ' + currentTab )
    // console.log( 'ext: ' + currentTab.motion )
    // gsap.to(node, { opacity: 0, xPercent: value, duration: 0.2 });
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
      <div className="tabsContent">
        <TransitionGroup>
          {tabsContent.map((content, id) => (
            currentTab === id && (
              <CSSTransition 
                // in={ currentTab === id }
                key={id}
                timeout={800}
                onEnter={handleOnEnter}
                onExit={handleOnExit}
                // onEntering={handleOnEntering}
                // onExiting={handleOnExiting}
                // mountOnEnter
                // unmountOnExit
              >
                <div className="content">{ content }</div>
              </CSSTransition>
            )
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default Tab;