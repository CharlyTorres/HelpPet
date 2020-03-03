import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'



  class MapEmergency extends Component {
    state = {
      lng: 5,
      lat: 34,
      zoom: 2
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

          const popup1 = new mapboxgl.Popup({ offset: 25 }).setText(
            'Hospital Veterinario Durango: Calle de Durango 127, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX'
            );
            
            const el1 = document.createElement('div');
            el1.id = 'marker1';
      
          new mapboxgl.Marker(el1)
          .setLngLat([-99.1624, 19.4208])
          .setPopup(popup1)
          .addTo(map)

          const popup2 = new mapboxgl.Popup({ offset: 25 }).setText(
            'Cambia un destino hospital veterinario: Av Chapultepec 238, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX'
            );
            
            const el2 = document.createElement('div');
            el2.id = 'marker2';
      
          new mapboxgl.Marker(el2)
          .setLngLat([-99.1621, 19.4188])
          .setPopup(popup2)
          .addTo(map)

          const popup3 = new mapboxgl.Popup({ offset: 25 }).setText(
            'Calle Cruz Valle Verde 34, Santa Cruz del Monte, Cuauhtémoc, 06700 Naucalpan de Juárez, CDMX'
            
            );
            
            const el3 = document.createElement('div');
            el3.id = 'marker3';
      
          new mapboxgl.Marker(el3)
          .setLngLat([-99.1595, 19.4244])
          .setPopup(popup3)
          .addTo(map)
      
          const popup4 = new mapboxgl.Popup({ offset: 25 }).setText(
            'Centro veterinario Bichos: Valladolid 34, Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX'
            
            );
            
            const el4 = document.createElement('div');
            el4.id = 'marker4';
      
          new mapboxgl.Marker(el4)
          .setLngLat([-99.1684, 19.4210])
          .setPopup(popup4)
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