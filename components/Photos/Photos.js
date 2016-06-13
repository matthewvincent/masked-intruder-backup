import React from 'react';
import './Photos.scss';

const PhotosWrapper = () => (
  <Photos>
    <iframe 
      src="http://snapwidget.com/in/?u=dmFubmFiYW5kfGlufDIwMHwzfDIwfHxub3w1fG5vbmV8b25TdGFydHxub3x5ZXM=&ve=130516"
      title="Instagram Widget" 
      className="snapwidget-widget" 
      allowTransparency="true" 
      frameBorder="0" 
      scrolling="no" 
    ></iframe>
  </Photos>
);

const Photos = (props) => (
  <div className="photos">
  	{props.children}
  </div>
);

export default PhotosWrapper;