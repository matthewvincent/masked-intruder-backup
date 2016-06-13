import React from 'react';
import './Footer.scss';
import socialLinks from './socialConfig.js';


const Footer = ({mobile}) => (
  <footer 
    className={mobile 
      ? "mobile-footer" 
  	  : "footer"}
  >
  	<Social config={socialLinks}/>
  </footer>
);

const Social = ({config}) => (
  <div className="social-wrapper">
  	<SocialLinks config={config}/>
  </div>
);


const SocialLinks = ({config}) => {

  const socialList = config.map((i)=> (
	<SocialButton
	  link={i.link}
	  name={i.name}
	  key={i.name}
	/>
  ));

  return (
    <ul className="social-list">
	  {socialList}
	</ul>
  );
};

const SocialButton = ({link, name}) => (
  <a href={link}>
  	<i 
  	  className={"social-icon fa fa-" + name } 
  	  aria-hidden="true"
  	></i>
  </a>
);



export default Footer;
