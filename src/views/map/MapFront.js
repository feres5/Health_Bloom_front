import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import Map from "react-map-gl";
import jwt_decode from "jwt-decode";
import "./styles.css";
export default function MapFront(props) {
  const [geoLocation, setGeoLocation] = useState(null);
  const [geoError, setGeoError] = useState(null);

  const [markerExists, setMarkerExists] = useState(false);
  let [markerPosition, setMarkerPosition] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  });
  var token = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(token, { payload: true });
  const [userInfo, setUserInfo] = React.useState({});
  const [doctorInfo, setdoctorInfo] = React.useState({});
  const [route, setRoute] = React.useState(null);

  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const getInfo = async () => {
    const reponse = await fetch(
        process.env.REACT_APP_BackEnd_url+`/users/getById/${decodedTOKEN.user_id}`
    );
    const infoRes = await reponse.json();
    setdoctorInfo(infoRes.doctor);

    setUserInfo(infoRes.user);
    if (infoRes.doctor.officeMap) {
      setMarkerExists(true);
      setMarkerPosition({
        latitude: +infoRes.doctor.officeMap.latitude,
        longitude: +infoRes.doctor.officeMap.longitude,
      });
    }
  };

  const [selectedPark, setSelectedPark] = useState(false);

  /*------------------------------------------------------------------------------ */
  async function getRoute(start, end) {
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
          zoom: 10,
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
        {markerExists && (
          <Marker
            latitude={markerPosition.latitude}
            longitude={markerPosition.longitude}
          >
            <img
              onMouseEnter={() => setSelectedPark(true)}
              onMouseLeave={() => setSelectedPark(false)}
              //onClick={markerClick}
              style={{ width: "25px", height: "25px" }}
              src="/map-marker-icon.png"
              alt="Skate Park Icon"
            />
          </Marker>
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

        {/* {route && //<PolylineOverlay points={route} />
          route.map((item, index) => (
            <Marker
              className="mapboxgl-marker"
              key={index}
              latitude={item[0]}
              longitude={item[1]}
            ></Marker>
          ))} */}
        {selectedPark && (
          <Popup
            latitude={markerPosition.latitude}
            longitude={markerPosition.longitude}
            onClose={() => {
              setSelectedPark(false);
            }}
          >
            <div>
              <h2>
                {" "}
                {userInfo.FirstName} {userInfo.LastName}
              </h2>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}
