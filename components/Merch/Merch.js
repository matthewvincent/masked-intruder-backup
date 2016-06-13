import React from 'react';
import './Merch.scss';
import merchStores from './merchConfig.js';


const MerchStore = ({thumbnail, link, country, name}) => (
  <div>
    <a href={link} >
      <div className="merch-store">
  	    <div className="title-wrapper">
  	      <h1 className="title">{name}</h1>
  	      <p className="country-name">{country}</p>
  	    </div>
          <img 
            clasSName="merch-store-thumbnail"
            src={thumbnail} 
          />
      </div>
    </a>
  </div>
);

const MerchLinks = ({config}) => {

  const merchList = config.map((i) => (
  	<MerchStore
  	  key={i.name} 
  	  thumbnail={i.thumbnail}
  	  link={i.link} 
  	  country={i.country}
  	  name={i.name}
  	/>
  ));

  return (
    <div>
      {merchList}
    </div>
  );	
}

const MerchWrapper = () => (
  <div className="merch-wrapper">
    <MerchLinks config={merchStores} />
  </div>
);
  
export default MerchWrapper;