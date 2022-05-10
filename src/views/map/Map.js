import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default function Map() {
  const [markerExists, setMarkerExists] = useState(false);
  let [markerPosition, setMarkerPosition] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
  });
  var token = localStorage.getItem("user_info");
  var decodedTOKEN = jwt_decode(token, { payload: true });
  const [userInfo, setUserInfo] = React.useState({});
  const [doctorInfo, setdoctorInfo] = React.useState({});
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  const getInfo = async () => {
    const reponse = await fetch(
      `http://localhost:3002/users/getById/${decodedTOKEN.user_id}`
    );
    const infoRes = await reponse.json();
    setdoctorInfo(infoRes.doctor);
    console.log(infoRes.user);
    setUserInfo(infoRes.user);
    if (infoRes.doctor.officeMap) {
      setMarkerExists(true);
      setMarkerPosition({
        latitude: +infoRes.doctor.officeMap.latitude,
        longitude: +infoRes.doctor.officeMap.longitude,
      });
      setViewport({
        latitude: +infoRes.doctor.officeMap.latitude,
        longitude: +infoRes.doctor.officeMap.longitude,
        width: "100vw",
        height: "100vh",
        zoom: 10,
      });
    }
  };

  const [selectedPark, setSelectedPark] = useState(false);

  const markerClick = () => {
    setSelectedPark(true);
  };
  async function mapClick(e) {
    let result = await fetch(
      `http://localhost:3002/doctor/setMapPos/${decodedTOKEN.restUserInfo}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ longitude: e.lngLat[0], latitude: e.lngLat[1] }),
      }
    );

    var newPosition = markerPosition;
    newPosition.latitude = e.lngLat[1];
    newPosition.longitude = e.lngLat[0];

    setMarkerPosition(newPosition);
    setSelectedPark(true);
    setSelectedPark(false);
    setMarkerExists(true);
  }
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(false);
      }
    };
    window.addEventListener("keydown", listener);

    getInfo();
  }, []);

  return (
    <div>
      <ReactMapGL
        //mapStyle="mapbox://styles/mapbox/dark-v9"
        onClick={mapClick}
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
      </ReactMapGL>
    </div>
  );
}
