"use client";

import styles from'./modal.module.css';
import * as Dialog from '@radix-ui/react-dialog';
import Button from '../Button/Button';
import DecoratedBooks from '../DecoratedBooks/DecoratedBooks';
import { Close } from '../Icons/Icons';
import { motion, AnimatePresence, useWillChange } from 'framer-motion';

function Modal({ children, trigger, open, setOpen }) {
  const willChange = useWillChange();
  return (
    <Dialog.Root modal open={ open } onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        { trigger }
      </Dialog.Trigger>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay className={ styles.DialogOverlay } asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild className={ styles.DialogContent }>
              <motion.div
                initial={{ scale: 0.8, translateY: '-30%', opacity: 0 }}
                animate={{ scale: 1, translateY: '-50%', opacity: 1 }}
                exit={{ scale: 0.8, translateY: '-30%', opacity: 0 }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
                style={{ translateX: '-50%', translateY: '-50%', willChange }}
              >
                { children }

                {/* Custom decoration */}
                <DecoratedBooks style={{ margin: '-1.375rem', marginTop: '0'}}/>

                <Dialog.Close asChild>
                  <Button className={ styles.IconButton } aria-label="Close" title="зачинити">
                    <Close width="16" height="16" color={'var(--icon-color, var(--text-dark))'} />
                  </Button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

export default Modal;