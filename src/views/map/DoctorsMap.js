import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import Map from "react-map-gl";
import "./styles.css";
export default function MapFront() {
  const [geoLocation, setGeoLocation] = useState(null);
  const [geoError, setGeoError] = useState(null);

  const [markerExists, setMarkerExists] = useState(false);
  let [markerPosition, setMarkerPosition] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  });
  const [doctors, setDoctors] = React.useState(null);
  const [route, setRoute] = React.useState(null);

  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 100,
  });
  const getInfo = async () => {
    const reponse = await fetch(`http://127.0.0.1:3002/doctor/getAll`);
    const infoRes = await reponse.json();
    setDoctors(infoRes);
  };

  const [selectedPark, setSelectedPark] = useState(false);

  /*------------------------------------------------------------------------------ */
  async function getRoute() {
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/36.39323630394876,8.991804169351417;36.831232,10.2137856?steps=true&geometries=geojson&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`,
      { method: "GET" }
    );
    const info = await query.json();
    console.log(info);
    setRoute(info.routes[0].geometry.coordinates);
  }
  /*------------------------------------------------------------------------------ */

  useEffect(() => {
    getRoute();
    navigator.geolocation.getCurrentPosition(
      (e) => {
        setGeoLocation(e.coords);
        setViewport({
          latitude: e.coords.latitude,
          longitude: e.coords.longitude,
          width: "100vw",
          height: "100vh",
          zoom: 5,
        });
      },
      async (err) => {
        setGeoError({
          geoError: err,
        });
      }
    );

    /*--------------current position -------------------------------- */

    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(false);
      }
    };
    window.addEventListener("keydown", listener);

    getInfo();
  }, []);

  return (
    <div className="mapFront">
      <Map
        mapStyle="mapbox://styles/mapbox/streets-v9"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {doctors &&
          doctors.map(
            (item, key) =>
              item &&
              item._doctor &&
              item._doctor.officeMap && (
                <Marker
                  key={key}
                  latitude={+item._doctor.officeMap.latitude}
                  longitude={+item._doctor.officeMap.longitude}
                >
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src="/map-marker-icon.png"
                    alt="Skate Park Icon"
                  />
                </Marker>
              )
          )}
        {geoLocation && geoLocation.longitude && geoLocation.latitude && (
          <Marker
            latitude={geoLocation.latitude}
            longitude={geoLocation.longitude}
          >
            <img
              style={{ width: "25px", height: "25px" }}
              src="/pateint-marker.png"
              alt="Skate Park Icon"
            />
          </Marker>
        )}
      </Map>
    </div>
  );
}
