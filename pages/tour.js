import React, { Component } from 'react';
import TourDatesWrapper from '../components/TourDates/TourDates.js';

export default class extends Component {

  render() {
    return (
      <div className="tour">
      	<div className="tour-header">
          <h1>TOUR DATES</h1>
        </div>
    	  <TourDatesWrapper  />
      </div>
    );
  }
}
