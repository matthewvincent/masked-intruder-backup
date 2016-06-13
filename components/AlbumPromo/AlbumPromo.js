import React from 'react';
import './AlbumPromo.scss';
import albums from './albumsConfig.js';
import AlbumCover from '../../static/album-cover.png';
import AlbumCover2 from '../../static/album-cover2.png';
import Promo1 from '../../static/promo1.png';

const AlbumPromo = () => (
  <div>
	  <div className="album-promo">
      <AlbumArt />
	  </div>
    <AlbumTeaser>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/pOPAt6W76sM" 
        frameBorder="0" 
        allowFullScreen="true"
      >
      </iframe>
    </AlbumTeaser>
	  <div className="release-info">
	    <h1>IN STORES JULY 8, 2016</h1>
	    <PreorderButton
	  	  link="http://smarturl.it/Masked" 
	    > BUY CD/EP
      </PreorderButton>
      <PreorderButton
        link="http://geni.us/MIEP?app=itunes" 
      > BUY DIGITAL
      </PreorderButton>
	  </div>
	  <MusicSection config={albums} />
  </div>
);

const AlbumArt = () => (
  <div className="album-art-wrapper">
    <img 
    	src={AlbumCover2}  
  	  className="album-art"
    />
    <div className="album-title">
      <h2>NEW EP</h2>
      <h1>LOVE AND OTHER CRIMES</h1>
      <h2>OUT 07.08.2016</h2>
    </div>
  </div>
);

const AlbumTeaser = (props) => (
  <div className="album-teaser">
    <div className="video-background">
      <div className="responsive-video-wrapper">
        {props.children}
      </div>
    </div>
  </div>
);

const PreorderButton = (props) => (
  <a 
    className="preorder-button"  
    href={props.link}
  >
	  <span className="preorder-text">
      {props.children}
    </span>
  </a>
);

const MusicSection = ({config}) => {

  const albums = config.map((album) => (
    <AlbumLinks
      key={album.title}
      image={album.thumbnail}
      spotifyLink={album.spotifyLink}
      appleLink={album.appleLink}
      title={album.title}
      storeLink={album.storeLink}
    />
  ));

  return (
    <div className="music-section">
      <div  className="album-links-wrapper">
      </div>
    </div>
  );
};

const AlbumLinks = ({image, spotifyLink, appleLink, title, storeLink}) => (
  <div className={"promoted-album"}>
  	<a href={storeLink}>
  	  <img 
  	    className="promoted-album-thumbnail"
  	    src={image} 
  	  />
  	</a>
  	<div className="listen-links">
  	  <a 
  	    className="spotify-link" 
  	    href={spotifyLink}
  	  >
        <i 
          className="link-icon fa fa-spotify" 
          aria-hidden="true"
        ></i>
        SPOTIFY
  	  </a>
      <a 
        className="apple-link" 
        href={appleLink}
      >
        <i 
          className="link-icon fa fa-apple" 
          aria-hidden="true"
        ></i>
        APPLE MUSIC
      </a>
  	</div>
  </div>
);

export default AlbumPromo;