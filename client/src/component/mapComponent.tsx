import React, { useEffect } from 'react';
import L from 'leaflet';


interface CustomWindow extends Window {
  myMap?: L.Map;
}
declare let window: CustomWindow;

interface MapProps {
  geoJSON:  {
    type: 'Feature';
    properties: {
      ADMIN: string;
      ISO_A3: string;
    };
    geometry: {
      type: 'Polygon';
      coordinates: number[][][];
    };
  }
}


const MapComponent: React.FC<MapProps> = ({ geoJSON}) => {
  useEffect(() => {
    if (!window.myMap) {
      window.myMap = L.map('map').setView([47.5162, 14.5501], 4);
    }

    const map = window.myMap;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.geoJSON(geoJSON, {
      style: () => ({
        color: '#ff7800',
        weight: 1,
        fillColor: 'yellow',
        fillOpacity: 0.5
      })
    }).addTo(map);


    return () => {
      if (window.myMap) {
        window.myMap.remove();
        window.myMap = undefined;
      }
    };
  }, [geoJSON]);

  return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default MapComponent;

