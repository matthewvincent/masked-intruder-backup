import React from 'react';
import './Videos.scss';
import videoData from './VideoData.js'




const Videos = React.createClass({

  getInitialState () {
	return { mobile: true };
  },

  componentDidMount () {
    if (!matchMedia('(max-width: 768px)').matches) {
      this.setState({ mobile: false });
    }
  },

  render () {

  	return (
	  <div className="videos-wrapper">
	    <VideoList 
	      data={videoData} 
	      mobile={this.state.mobile} 
	    />
	  </div>
	);
  }
});


const VideoList = ({data, mobile}) => {

  let Iframe, videoList, height, width;

  Iframe = 'iframe';
  videoList = [];
  height = mobile ? "180" : "360";
  width = mobile ? "320"  : "640";
		
  data.forEach((v) => {
    let src = v.url;
	let title = v.title

	  videoList.push(
	    <div 
		  className= "video-background"
		  key={title}
		> 
		  <div className="video">
		    <Iframe
			  iframe='iframe'  
			  src={src}
			  width={width} 
		      height={height} 
		      frameBorder="0" 
		      allowFullScreen 
			/>
	      </div>
		</div>
      );
  });

  return (
	<div>
     {videoList}
    </div>
  );
};





export default Videos;