import React, { Component } from 'react';
import './App.css';
import L from 'leaflet';
// import { Map, TileLayer } from 'react-leaflet';
import Geojsondata from './ktmschools.json';

// var map = L.map('map', {
//   zoom: 13
// });

// const myIcon = L.icon({
//   iconUrl: 'images/marker-icon.png',
//   iconSize: [50, 32],
//   iconAnchor: [25, 16]
// });

  // state = {
  //   lat: 27.7172,
  //   lng: 85.3240,
  //   zoom: 13,
  // }

class mapapp extends  Component {
  componentDidMount() {
    let map = L.map('map').setView([27.7172, 85.3240], 13);
    console.clear()
console.log(Geojsondata)

   function onclicking (feature, layer) {
     layer.bindPopup(feature.properties.name);
   };


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    L.geoJson(Geojsondata, 
      {
      onEachFeature: onclicking

    }).addTo(map);
    
  
  }
  
  render() { 
    
    return (
      <React.Fragment>
      <h1 className = "page-header">Schools In Kathmandu</h1>
      <div id='map'>
      </div>
    </React.Fragment>

    )

  }
  } 
export default mapapp;
 