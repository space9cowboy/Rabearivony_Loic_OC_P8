import React from 'react'

function ButtonContact({ onClick, text, className }) {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default ButtonContact