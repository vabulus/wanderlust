import {useEffect, useState} from "react";
import axios from "axios";
import {geoJSON} from "leaflet";
import MapComponent from "../component/mapComponent";
import {fetchGeoJSON} from "../hooks/fetchGeoJSON";
import {assertMenuLinkedWithMenuItem} from "@headlessui/react/dist/test-utils/accessibility-assertions";


type GeoJSONData = {
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


export function MapOverview() {
  const [geoJSONData, setGeoJSONData] = useState<GeoJSONData>();

  const [Map, setMap] = useState<any>();


  useEffect(() => {
    fetchGeoJSON("DEU").then((data) => {
      setGeoJSONData(data);
    }).catch((error) => {
      console.error("Error fetching data: ", error);
    });
  }, []);

  useEffect(() => {
    if(geoJSONData){
      setMap(MapComponent({geoJSON: geoJSONData}));
    }
    else {
      alert("No data available");
    }
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <div>
        {geoJSONData && <MapComponent geoJSON={geoJSONData}/>}
      </div>
    </>
  );
}


export default MapOverview;