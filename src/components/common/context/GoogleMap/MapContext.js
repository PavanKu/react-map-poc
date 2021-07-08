import * as React from "react";
import useScript from "../../hooks/useScript";
import { GMAP } from "../../../../constants";
import HTMLMarker from "../../components/HTMLMarker";
import MapUtils from "../../../../utilities/mapUtil";
import "./style.css";
// import MAP_STYLE from "./mapStyle.json";

const MapContext = React.createContext(null);

const MapProvider = ({ children }) => {
  const { isLoaded, error } = useScript(GMAP.SCRIPT);
  const mapInstance = React.useRef(null);

  if (
    isLoaded &&
    error === null &&
    window.google &&
    mapInstance.current === null
  ) {
    const mapContainer = document.getElementById(GMAP.CONTAINER_ID);
    mapInstance.current = new window.google.maps.Map(mapContainer, GMAP.CONFIG);
  }
  return (
    <MapContext.Provider value={mapInstance.current}>
      <div className="react_component-container">
        {!isLoaded && <div className={`reactContainer`}>Loading</div>}
        {isLoaded && error && <div className={`reactContainer`}>Error</div>}
        {children}
      </div>
      <div
        id={GMAP.CONTAINER_ID}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </MapContext.Provider>
  );
};

const useMap = () => {
  const mapInstance = React.useContext(MapContext);
  if (mapInstance === undefined) {
    throw new Error("useMap must be used within MapProvider");
  }
  const addImgMarker = ({ url, lat, lng, width = 64, height = 64 }) => {
    const imgMarker = {
      url: url,
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(0, 70),
      size: new window.google.maps.Size(width, height),
      scaledSize: new window.google.maps.Size(width, height),
    };

    return new window.google.maps.Marker({
      position: new window.google.maps.LatLng(lat, lng),
      map: mapInstance,
      icon: imgMarker,
    });
  };

  const addHTMLMarker = ({ html, lat, lng }) => {
    HTMLMarker({
      latlng: new window.google.maps.LatLng(lat, lng),
      map: mapInstance,
      html,
    });
  };
  const goToLocation = ({ lat, lng }) => {
    window.setTimeout(() => {
      const latLng = new window.google.maps.LatLng(lat, lng);
      mapInstance.setZoom(7);
      mapInstance.panTo(latLng);
      const circle = new window.google.maps.Circle({
        strokeWeight: 0,
        fillColor: "#000",
        fillOpacity: 0.1,
        map: mapInstance,
        center: latLng,
        radius: 150000, //150km
      });
      const randomMarkers = MapUtils.generateRandomPoints(
        { lat, lng },
        150000,
        5
      );
      randomMarkers.forEach((loc) =>
        addImgMarker({
          url: "/images/slide.png",
          lat: loc.lat,
          lng: loc.lng,
          width: 32,
          height: 32,
        })
      );
    }, 0);
  };
  return { mapInstance, addImgMarker, addHTMLMarker, goToLocation };
};

export { MapProvider, useMap };
