import * as React from "react";
import useScript from "../../hooks/useScript";
import useStyle from "../../hooks/useStyle";
import { LLMAP } from "../../../../constants";
import MapUtils from "../../../../utilities/mapUtil";
import "./style.css";

const MapContext = React.createContext(null);

const MapProvider = ({ children }) => {
  const { isLoaded: isScriptLoaded, error: scriptError } = useScript(
    LLMAP.SCRIPT.url,
    LLMAP.SCRIPT.integrity
  );
  const { isLoaded: isStyleLoaded, error: styleError } = useStyle(
    LLMAP.STYLE.url,
    LLMAP.STYLE.integrity
  );
  const mapInstance = React.useRef(null);
  if (
    isScriptLoaded &&
    isStyleLoaded &&
    styleError === null &&
    scriptError === null &&
    window.L &&
    mapInstance.current === null
  ) {
    const mapContainer = document.getElementById(LLMAP.CONTAINER_ID);
    mapInstance.current = window.L.map(mapContainer, LLMAP.CONFIG);

    window.L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(mapInstance.current);
  }
  return (
    <MapContext.Provider value={mapInstance.current}>
      <div className="react_component-container">
        {!isScriptLoaded && <div className={`reactContainer`}>Loading</div>}
        {isScriptLoaded && scriptError && (
          <div className={`reactContainer`}>Error</div>
        )}
        {children}
      </div>
      <div
        id={LLMAP.CONTAINER_ID}
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
  const addImgMarker = ({ url, lat, lng, size = [64, 64] }) => {
    //https://leafletjs.com/reference-1.7.1.html#icon
    const imgMarker = window.L.icon({
      iconUrl: url,
      iconSize: size,
      iconAnchor: [0, 70],
    });

    return window.L.marker(
      { lat, lng },
      {
        icon: imgMarker,
      }
    ).addTo(mapInstance);
  };

  const addHTMLMarker = ({ html, lat, lng }) => {
    const htmlMarker = window.L.divIcon({
      className: "html-marker",
      html,
    });
    return window.L.marker(
      { lat, lng },
      {
        icon: htmlMarker,
      }
    ).addTo(mapInstance);
  };
  const clearLocation = ({ lat, lng }) => {
    // clear location,
    // clear circle
    // clear added markers
  };
  const goToLocation = ({ lat, lng }) => {
    // go to location
    mapInstance.flyTo([lat, lng], 7);
    // create a circle
    window.L.circle([lat, lng], {
      radius: 150000,
      stroke: false,
      color: "#000",
      fillOpacity: "0.1",
    }).addTo(mapInstance);
    // drop some markers
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
        size: [32, 32],
      })
    );
  };
  return { mapInstance, addImgMarker, addHTMLMarker, goToLocation };
};

export { MapProvider, useMap };
