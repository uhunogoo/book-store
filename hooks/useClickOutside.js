import React from 'react';

export function useClickOutside( status, toggleStatus ) {
  const ref = React.useRef();
  if (!toggleStatus) return null;
  
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (status === false) return null;
      if (ref.current && !ref.current.contains(event.target)) {
        toggleStatus();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [status, toggleStatus]);

  return ref;
}