'use client'

import React from 'react';
import Button from '../Button/Button';

import styles from './style.module.css';
import { AnimatePresence, LayoutGroup, motion, useWillChange } from 'framer-motion';

function Tab({ tabs}) {
  const [ selectedTab, setSelectedTab ] = React.useState( tabs[0] );
  const willChange = useWillChange();

  return (
    <>
      <nav className={ styles.tabsRow }>
        <ul>
        { tabs.map(( tab ) => (
          <li key={ tab.title }>
            <Button
              onClick={() => setSelectedTab( tab ) }
            >
              { tab.title }              
            </Button>
            {tab === selectedTab ? (
              <motion.div 
                className={styles.underline} 
                transition={{ type: 'spring', bounce: 0, duration: 0.2 }} 
                layoutId='line'
                style={{ willChange }} 
              />
            ) : null}
          </li>
        )) }
        </ul>
      </nav>
      
      <TabContent currentTab={ selectedTab }/>
    </>
  )
}

function TabContent({ currentTab }) {
  // const d = 1;
  const willChange = useWillChange();
  

  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode='wait'>
        <motion.div
          className={styles.content}
          key={currentTab ? currentTab.title : "empty"}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          
          style={{ willChange }}
        >
          { currentTab ? currentTab.content : "😋" }
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Tab;