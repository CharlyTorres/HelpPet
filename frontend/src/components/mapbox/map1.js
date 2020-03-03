import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'



  class MapEmergency extends Component {
    state = {
      lng: -99.1635,
      lat: 19.4215,
      zoom: 15
    }
    
    componentDidMount() {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
      });
      map.on('move', () => {
        this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
        });
        });
        map.addControl(
          new mapboxgl.GeolocateControl({
          positionOptions: {
          enableHighAccuracy: true,
        },
        showAccuracyCircle: false,
        trackUserLocation: true
          })
          );
          const popup = new mapboxgl.Popup({ offset: 25 }).setText(
            ' Tonalá 10 colonia Roma Norte C.P 06700.'
            );
            
            const el = document.createElement('div');
            el.id = 'marker';
  
          new mapboxgl.Marker(el)
          .setLngLat([-99.1632, 19.4215])
          .setPopup(popup)
          .addTo(map)
    }
  

  
  render() {
    return (
      <div>
      <div>
<div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
</div>
      <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default MapEmergency;