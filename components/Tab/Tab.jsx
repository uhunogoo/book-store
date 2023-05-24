'use client'

import React from 'react';
import Button from '../Button/Button';

import styles from './style.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function Tab({ tabs }) {
  const [ selectedTab, setSelectedTab ] = React.useState( tabs[0] );

  return (
    <>
      <nav className={ styles.tabsRow }>
        <ul>
        { tabs.map(( tab ) => (
          <li key={ tab.title }>
            <Button
              className={`${styles.button} ${ selectedTab.title === tab.title ? styles.active : '' }`}
              onClick={() => setSelectedTab( tab ) }
            >
              { tab.title }              
            </Button>
          </li>
        )) }
        </ul>
      </nav>

      <div className={styles.wrapper}>
        <AnimatePresence mode='wait' initial={false}>
          <motion.div
            className={styles.content}
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
          >
            { selectedTab ? selectedTab.content : "😋" }
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}


export default Tab;