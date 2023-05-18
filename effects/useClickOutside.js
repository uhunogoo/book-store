import React from 'react';

export function useClickOutside( set ) {
  const ref = React.useRef();

  if (!set ) return null;

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        set( false );
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return ref;
}