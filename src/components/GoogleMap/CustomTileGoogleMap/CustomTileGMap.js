import { useEffect } from "react";
import { useMap } from "../../common/context/GoogleMap/MapContext";
import ICONS from "../../common/config/icons.json";
import COUNTRIES from "../../common/config/countries.json";

const CustomTileGMap = () => {
  const { mapInstance, addImgMarker, addHTMLMarker } = useMap();

  useEffect(() => {
    if (mapInstance) {
      //https://gist.github.com/clhenrick/dcce31036d3e3940c55b31ddb86ca1ec
      const TILE_URL = "http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg";
      const layerId = "custom-tile";
      // Set custom map tiles
      const layer = new window.google.maps.ImageMapType({
        name: layerId,
        getTileUrl: function (coord, zoom) {
          console.log(coord);
          var url = TILE_URL.replace("{x}", coord.x)
            .replace("{y}", coord.y)
            .replace("{z}", zoom);
          return url;
        },
        tileSize: new window.google.maps.Size(256, 256),
        minZoom: 1,
        maxZoom: 20,
      });

      // Apply the new tile layer to the map.
      mapInstance.mapTypes.set(layerId, layer);
      mapInstance.setMapTypeId(layerId);
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

export default CustomTileGMap;
