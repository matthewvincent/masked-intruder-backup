/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';
// import VannaLogo from '../../static/vanna-brand-logo.png';


const Navigation = ({mobile, mobileMenuOpen, toggleMenu, linkState}) => (
  <div>
    <div className={mobile 
           ? "desktop-nav-hidden" 
           : "desktop-nav-show"}
    >
      <DesktopNav
        mobile={mobile} 
        toggleMenu={toggleMenu}
        linkState={linkState}
      />
    </div>
    <div className={mobile 
           ? "mobile-nav-show" 
           : "mobile-nav-hidden"}
    >
      <MobileNav
        mobile={mobile} 
        toggleMenu={toggleMenu}
        mobileMenuOpen={mobileMenuOpen}
        linkState={linkState}
      />
      <div className="mobile-navbar"></div>
    </div>
  </div>
);

const DesktopNav = ({mobile, toggleMenu, linkState}) => (
  <div>
    <Links
      mobile={mobile} 
      toggleMenu={toggleMenu}
      linkState={linkState}
    />
  </div>
);

const BrandIcon = () => (
  <div>
    <img 
      className="brand" 
      src={VannaLogo} 
    />
  </div>
);

const MobileNav = ({mobile, toggleMenu, mobileMenuOpen, linkState}) => (
  <div>
    <div className="mobile-navigation">
      <MenuIcon
        toggleMenu={toggleMenu}
        mobileMenuOpen={mobileMenuOpen} 
      />
    </div>
    <MobileMenu
      mobile={mobile} 
      toggleMenu={toggleMenu} 
      mobileMenuOpen={mobileMenuOpen} 
      linkState={linkState}
    />
  </div>
);

const MobileMenu = ({mobile, toggleMenu, mobileMenuOpen, linkState}) => (
  <div className={mobileMenuOpen 
        ? "mobile-menu-wrapper-open" 
        : "mobile-menu-wrapper-closed"}
  >
    <div className={mobileMenuOpen 
           ? "mobile-menu-background mmbOpen" 
           : "mobile-menu-background mmbClosed"}
    >
      <Links
        mobile={mobile}  
        toggleMenu={toggleMenu}
        mobileMenuOpen={mobileMenuOpen}
        linkState={linkState}
      />
    </div>
  </div>
);


const Links = ({mobile, toggleMenu, linkState}) => {

  const mobileClick = () => {
    Link.handleClick();
    toggleMenu();
  };

  const desktopClick = () => {
    Link.handleClick();
  };

  const linksMapped = linkState.map((i, index) => (
    <li 
      className={i.show 
        ? "" 
        : "animate-nav-item"} 
      key={index}
    >
      <a 
        className="Navigation-link" 
        href={i.href} 
        onClick={mobile 
          ? mobileClick 
          : desktopClick}
      > {i.name}
      </a>
    </li>
  ));

  return (
    <ul className={mobile 
          ? "mobile-nav-links" 
          : "desktop-navigation"} 
        role="menu"
    > {linksMapped}
    </ul>
  );
}

const MenuIcon = ({toggleMenu, mobileMenuOpen}) => (
  <div
    className="menu-icon"  
    onClick={toggleMenu}
  >
    <i className={mobileMenuOpen 
         ? "fa fa-times-circle close animate-nav-item" 
         : "fa fa-bars burger"} 
       aria-hidden="true"
    ></i>
    <span className="menu-title"> 
      MENU 
    </span>
  </div>
);

export default Navigation;
