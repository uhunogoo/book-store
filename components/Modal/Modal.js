"use client";

import styles from'./modal.module.css';
import * as Dialog from '@radix-ui/react-dialog';
import Button from '../Button/Button';
import DecoratedBooks from '../DecoratedBooks/DecoratedBooks';
import { Close } from '../Icons/Icons';

function Modal({ children, trigger, open, setOpen, title }) {
  return (
    <Dialog.Root modal open={ open } onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        { trigger }
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={ styles.DialogOverlay } />
        <Dialog.Content className={ styles.DialogContent }>
          
          { children }

          {/* Custom decoration */}
          <DecoratedBooks style={{ margin: '-1.375rem', marginTop: '0'}}/>

          <Dialog.Close asChild>
            <Button className={ styles.IconButton } aria-label="Close" title="Close modal">
              <Close color={'var(--text-grey)'} />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;