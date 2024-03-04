import React from 'react';

function ButtonSocial( social) {
  return (
    <a className={` ${social.className}`} href={social.onClick}>
      {social.children}
    </a>
  );
}

export default ButtonSocial;
