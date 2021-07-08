import { useCallback, useEffect, useRef } from "react";
import { useMap } from "../../common/context/GoogleMap/MapContext";
import MAP_STYLE from "../../common/config/mapStyle.json";
import ICONS from "../../common/config/icons.json";
import COUNTRIES from "../../common/config/countries.json";

const StyledGMap = () => {
  const { mapInstance, addImgMarker, addHTMLMarker } = useMap();
  const markersRef = useRef([]);

  const dropMarkers = useCallback(() => {
    /* const zoom = mapInstance.getZoom();
    const iconsToAdd = ICONS.filter((icon) =>
      markersRef.current.find((marker) => {
        const latLng = marker.getPosition();
        if (
          latLng.lat() === icon.lat &&
          latLng.lng() === icon.lng &&
          (icon.zoom === undefined || icon.zoom === zoom)
        ) {
          return false;
        }
        return true;
      })
    ); */
    // drop svg icon markers
    ICONS.forEach((icon) => {
      addImgMarker({
        url: `/images/icons/${icon.path}`,
        lat: icon.lat,
        lng: icon.lng,
      });
    });
    // drop html markers
    COUNTRIES.forEach((country) => {
      const htmlStr = `<div class="g-map-label">${country.city}</div>`;
      addHTMLMarker({ html: htmlStr, lat: country.lat, lng: country.lng });
    });
  }, [addImgMarker, addHTMLMarker]);

  useEffect(() => {
    if (mapInstance) {
      // Set custom map style
      mapInstance.mapTypes.set(
        "styled_map",
        new window.google.maps.StyledMapType(MAP_STYLE)
      );
      mapInstance.setMapTypeId("styled_map");
      dropMarkers();
    }
  }, [mapInstance, dropMarkers]);

  return null;
};

export default StyledGMap;
