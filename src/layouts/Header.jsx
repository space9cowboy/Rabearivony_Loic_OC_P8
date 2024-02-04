import React from 'react'

import { Link } from 'react-scroll'
import ButtonContact from '../components/ButtonContact'

function Header() {
  return (
   <nav className="navbar">
     <a className='navbar__portfolioName'>
       LOÏC.
     </a>
     <div className="navbar__desktopMenu">
       <Link className="navbar__desktopMenuListItem">Home</Link>
       <Link className="navbar__desktopMenuListItem">About</Link>
       <Link className="navbar__desktopMenuListItem">Projects</Link>
       <Link className='navbar__desktopMenuListItem'>Skills</Link>
     </div>
     <ButtonContact text="Contact Me" />
   </nav>
  )
}
 
export default Header