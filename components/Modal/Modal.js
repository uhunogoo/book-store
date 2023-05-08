"use client";
import Image from 'next/image';
import styles from'./modal.module.css';
import * as Dialog from '@radix-ui/react-dialog';
import Button from '../Button/Button';
import DecoratedBooks from '../DecoratedBooks/DecoratedBooks';

function Modal({ children, trigger, title }) {
  return (
    <Dialog.Root modal>
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
              <Image src="/close.svg" width={12} height={12} alt="close icon" />
            </Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;