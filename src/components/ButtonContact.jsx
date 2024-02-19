import React from 'react'
import { FaGithub } from 'react-icons/fa6';
import { LuHardDriveDownload } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";

function ButtonContact({ onClick, text, className, withIcon, withIcon1, withIconOpen }) {
  return (
    <div className='btncontact'>
      <button className={`btn ${className}`} onClick={onClick}>
      {withIcon && <FaGithub />}
      {withIcon1 && <LuHardDriveDownload />}
      {withIconOpen && <IoOpenOutline />}
          {text}
      </button>
    </div>
  )
}

export default ButtonContact