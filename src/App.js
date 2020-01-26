import React, { Component } from 'react';
import './App.css';
// import L from 'leaflet';
// import GeoJSON from 'leaflet';
// import './ktmschools';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Map, TileLayer} from 'react-leaflet';


// var myGeojsonlayer = L.geoJSON().addTo(map);
// myGeojsonlayer.addData(geojsonFeature);

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

// marker Icon
// const myIcon = L.icon({
//   iconUrl: 'images/marker-icon.png',
//   iconSize: [50, 32],
//   iconAnchor: [25, 16]
// })

// class ktmGeojson extends Component {
//   render() { 
//     return ( L.geoJSON(ktmschools, {
//       style : function(feature) {
//         return {
//           color: '#e0e0',
//         }
//       }
//     }).addTo(map),
//     )
//   }
// }
 
// export default ktmGeojson;

// class App extends Component {
  export default class SimpleExample extends Component<{}, State> {

  state = {
    lat: 27.7172,
    lng: 85.3240,
    zoom: 13,
  }

  render(){

    // const map = L.map('map').setView([51.505, -0.09], 13);
    const position = [this.state.lat, this.state.lng]
    return (
      React.createElement('div', {id: 'leafletmap'}, 'code'),

      // var map = L.map('mapid', {
      //   zoomcontrol: false
      // }).addTo(map);
      <div className="App">
        <header className="">
          <h1>Schools in Kathmandu</h1>
        </header>
  
        <div id="mapid">
        {/* L.geoJSON(ktmschools, {
        style : function(feature) {
          return {
            color: '#e0e0';
          }
        }
      }).addTo(map); */}

          <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />.addTo(map);

      
          {/* L.marker([0, 0], {icon: myIcon}).addTo(map); */}
          
          {/* <Marker position = {position} icon = {myIcon}>
            <Popup>
              A preety CSS£ popup.
            </Popup>
          </Marker> */}
          </Map>
      

          {/* L.marker([51.5, -0.09]).addTo(map)
              .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
              .openPopup(); */}


        </div>
  
      </div>
      // function osmschools (feature, layer){
      // };
      // <GeoJSON data = {ktmschools} />

      // L.geoJSON(ktmschools, {
      //   onEachFeature: ;
      // }.addTo(map);

      
    );
  }
}

// export default App;
