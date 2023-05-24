'use client';
import { Icon } from 'components/Icons/Icons';
import { motion } from 'framer-motion';

function Rating({ rating = 0 }) {
  const variants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 4 / 5,
      transition: { delay: 0.4, type: 'spring', bounce: 0 }
    }
  }
  return (
    <Icon viewBox="0 0 120 24" color='white'>
      <rect id="default" width="120" y={1} height="22" fill="#c4c4c4" />
      <motion.rect id="progress" variants={variants} style={{ originX: 0 }} initial={'initial'} animate={'animate'}  width="120" y={1} height="22" fill="#FFE54A"/>
      <path id="stars" style={{ fill: "white" }} d="M0,0v24h120V0H0z M18.2,21.1L12,16.6l-6.2,4.5l2.4-7.3L2,9.3h7.6L12,2.1l2.4,7.3H22l-6.2,4.5
        L18.2,21.1z M42.2,21.1L36,16.6l-6.2,4.5l2.4-7.3L26,9.3h7.6L36,2.1l2.4,7.3H46l-6.2,4.5L42.2,21.1z M66.2,21.1L60,16.6l-6.2,4.5
        l2.4-7.3L50,9.3h7.6L60,2.1l2.4,7.3H70l-6.2,4.5L66.2,21.1z M90.2,21.1L84,16.6l-6.2,4.5l2.4-7.3L74,9.3h7.6L84,2.1l2.4,7.3H94
        l-6.2,4.5L90.2,21.1z M114.2,21.1l-6.2-4.5l-6.2,4.5l2.4-7.3L98,9.3h7.6l2.4-7.3l2.4,7.3h7.6l-6.2,4.5L114.2,21.1z"/>
    </Icon>
  )
}


export default Rating;