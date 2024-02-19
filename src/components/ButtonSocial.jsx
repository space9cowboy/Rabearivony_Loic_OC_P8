import React from 'react';

function ButtonSocial({ className, onClick, children }) {
  return (
    <button className={` ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonSocial;
