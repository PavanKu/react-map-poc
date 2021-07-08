import { useEffect } from "react";
import { useMap } from "../common/context/Leaflet/MapContext";
import ICONS from "../common/config/icons.json";
import COUNTRIES from "../common/config/countries.json";

const ImageOverlayLLMap = () => {
  const { mapInstance, addImgMarker, addHTMLMarker } = useMap();

  useEffect(() => {
    if (mapInstance) {
      // show image overlay
      const imageBounds = [
        [36.228314884134, 110.33985312499999],
        [3.3182023337626, 53.03516562499999],
      ];
      window.L.imageOverlay("/images/custom_map.svg", imageBounds).addTo(
        mapInstance
      );
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
        const htmlStr = `<div class="html-map-label">${country.city}</div>`;
        addHTMLMarker({ html: htmlStr, lat: country.lat, lng: country.lng });
      });
    }
  }, [mapInstance, addImgMarker, addHTMLMarker]);

  return null;
};

export default ImageOverlayLLMap;
