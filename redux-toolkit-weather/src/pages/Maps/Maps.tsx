import React, { useRef, useState, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { InfinitySpin } from 'react-loader-spinner';
import classes from "./Maps.module.scss";


const center = { lat: 48.8584, lng: 2.2945 }

const Maps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD89d-AUG6DL4R2p7T16fL3aUwWEvZWu0k",
  });





  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export default Maps



function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName={classes.mapContainer}>
      <Marker position={center} />
    </GoogleMap>
  );
}

