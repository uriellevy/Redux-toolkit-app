import React, { useRef, useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { InfinitySpin } from 'react-loader-spinner';
import classes from "./Maps.module.scss";
// require('dotenv').config();


const center = { lat: 48.8584, lng: 2.2945 }

const Maps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  const onLoad = (marker: any) => {
    console.log('marker: ', marker)
  }

  return (
    <div className={classes.mapContainer}>
      {isLoaded ?

        <GoogleMap zoom={10} center={center} mapContainerClassName={classes.map}>
          <Marker position={center} /* onLoad={onLoad} key="marker_1" */ />
        </GoogleMap>
        :
        <InfinitySpin />
      }
    </div>
  );
}

export default Maps
