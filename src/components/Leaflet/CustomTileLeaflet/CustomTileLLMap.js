import { useEffect } from "react";
import { useMap } from "../../common/context/Leaflet/MapContext";
import ICONS from "../../common/config/icons.json";
import COUNTRIES from "../../common/config/countries.json";

const CustomTileLLMap = () => {
  const { mapInstance, addImgMarker, addHTMLMarker } = useMap();

  useEffect(() => {
    if (mapInstance) {
      //https://leafletjs.com/reference-1.7.1.html#tilelayer
      window.L.tileLayer(
        "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.png"
      ).addTo(mapInstance);
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

export default CustomTileLLMap;
