import {useEffect} from "react";
import axios from "axios";

type GeoJSONFeature = {
  type: 'Feature';
  properties: {
    ADMIN: string;
    ISO_A3: string;
  };
  geometry: {
    type: 'Polygon';
    coordinates: number[][][];
  };
};
export const fetchGeoJSON = async (code: string): Promise<GeoJSONFeature> => {
  let geoJSON: GeoJSONFeature = {
    type: 'Feature',
    properties: {
      ADMIN: '',
      ISO_A3: '',
    },
    geometry: {
      type: 'Polygon',
      coordinates: [],
    },
  }

  try {
    const response = await axios.get(`http://localhost:3001/api/geojson/${code}`, {});
    geoJSON = response.data;
  } catch (error) {
    alert(error);
  }

  return geoJSON;
}