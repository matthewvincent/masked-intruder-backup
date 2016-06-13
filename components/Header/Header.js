import React from 'react';
import MainLogo from '../../static/main-logo.png';
import './Header.scss';

const Header = () => (
  <div>
	<div className="header-wrapper">
	  <div>
	  	<img className="header-logo" src={MainLogo} />
	  	  <a 
	        className="spotify-link" 
	        href="https://play.spotify.com/artist/4qUFkkArfii3qNG8TnbPfc"
	      > LISTEN ON SPOTIFY
	      <i className="fa fa-spotify" aria-hidden="true"></i>
	      </a>
	  </div>
	</div>
  </div>
);


export default Header;