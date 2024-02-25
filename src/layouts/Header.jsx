import React, { useState, useEffect } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';
import ButtonContact from '../components/ButtonContact';
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <a className='navbar__portfolioName'>
        LOÏC.
      </a>
      <div className="navbar__desktopMenu">
        <Link activeClass="active" to="accueil" spy={true} offset={-100} smooth={true} duration={500} className="navbar__desktopMenuListItem">Accueil</Link>
        <Link activeClass="active" to="aPropos" spy={true} offset={-100} smooth={true} duration={500} className="navbar__desktopMenuListItem">A propos</Link>
        <Link activeClass="active" to="projets" spy={true} offset={-100} smooth={true} duration={500} className="navbar__desktopMenuListItem">Projets</Link>
        <Link activeClass="active" to="competences" spy={true} offset={-100} smooth={true} duration={500} className='navbar__desktopMenuListItem'>Compétences</Link>
      </div>
      <Link to="contact" smooth={true} duration={500}>
        <ButtonContact text="Me contacter" className="navBtn" onClick={() => {}}  />
      </Link>

      {/* mobile part */}
      <RxHamburgerMenu className='mobHamburger' onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <div className="mobMenu">
          <Link activeClass="mobActive" to="accueil" spy={true} offset={-100} smooth={true} duration={500} className="mobMenuListItem">Accueil</Link>
          <Link activeClass="mobActive" to="aPropos" spy={true} offset={-100} smooth={true} duration={500} className="mobMenuListItem">A propos</Link>
          <Link activeClass="mobActive" to="projets" spy={true} offset={-100} smooth={true} duration={500} className="mobMenuListItem">Projets</Link>
          <Link activeClass="mobActive" to="competences" spy={true} offset={-100} smooth={true} duration={500} className='mobMenuListItem'>Compétences</Link>
          <Link activeClass="mobActive" to="contact" spy={true} offset={-100} smooth={true} duration={500} className='mobMenuListItem'>Me contacter</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
