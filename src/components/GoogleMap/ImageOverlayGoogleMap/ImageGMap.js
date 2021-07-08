import { useEffect } from "react";
import { useMap } from "../../common/context/GoogleMap/MapContext";
import CustomGMapTile from "./CustomGMapTile";
import ICONS from "../../common/config/icons.json";
import COUNTRIES from "../../common/config/countries.json";

const ImageGMap = () => {
  const { mapInstance, addImgMarker, addHTMLMarker } = useMap();

  useEffect(() => {
    if (mapInstance) {
      // Clear default google map tiles
      mapInstance.mapTypes.set(
        "background",
        new CustomGMapTile(new window.google.maps.Size(256, 256))
      );
      mapInstance.setMapTypeId("background");
      // add custom image as overlay
      const imageBounds = {
        north: 36.228314884134,
        south: 3.3182023337626,
        west: 53.03516562499999,
        east: 110.33985312499999,
      };
      const imageOverlay = new window.google.maps.GroundOverlay(
        "/images/custom_map.svg",
        imageBounds
      );
      imageOverlay.setMap(mapInstance);
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
    }
  }, [mapInstance, addImgMarker, addHTMLMarker]);

  return null;
};

export default ImageGMap;
