import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'


  class Map extends Component {
    state = {
      lng: -99.1632,
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
       new mapboxgl.Marker()
            .setLngLat([-99.1632, 19.4215])
            .addTo(map)
    }
  

  
  render() {
    return (
      <div className="flex">
      <div ref={el => this.mapContainer = el} className='mapContainer1' />
      </div>
    )
  }
}

export default Map;