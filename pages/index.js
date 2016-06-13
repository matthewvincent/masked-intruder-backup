import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import AlbumPromo from '../components/AlbumPromo/AlbumPromo.js';

export default class extends Component {

  render() {
    return (
      <div>
        <Header />
        <AlbumPromo />
      </div>
    );
  }
  
}
