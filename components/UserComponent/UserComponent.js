'use client'
import React from 'react';
import { MotionButton } from '../Button/Button';
import { User } from '../Icons/Icons';
import Modal from '../Modal/Modal';
import Login from '../Login/Login';


function UserComponent() {
  const [open, setOpen] = React.useState(false);
  return(
    <>
      <Modal 
        trigger={
          <MotionButton 
            title="Особистий кабінет" 
            type="button"
            whileTap={{ scale: 0.9 }}
          >
            <User width="40" height="40" color={ open ? 'white' : 'var(--text-dark)' } />
          </MotionButton>
        }
        open={open} 
        setOpen={ setOpen }
      >
        { open && <Login setOpen={setOpen}/> }
      </Modal>
    </>
  )
}

export default UserComponent;