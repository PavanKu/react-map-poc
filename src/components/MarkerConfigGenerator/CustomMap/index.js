import * as React from "react";
import { useGMap } from "../../common/context/GoogleMap";
import MAP_STYLE from "../../common/config/mapStyle.json";

const CustomMap = ({
  icon,
  handleUpdateConfig,
  handleZoomChange,
  config,
  hZoom,
}) => {
  const { mapInstance, addImgMarker } = useGMap();
  const markersRef = React.useRef({});

  React.useEffect(() => {
    if (mapInstance) {
      // Set custom map style
      mapInstance.mapTypes.set(
        "styled_map",
        new window.google.maps.StyledMapType(MAP_STYLE)
      );
      mapInstance.setMapTypeId("styled_map");
      mapInstance.addListener("zoom_changed", () => {
        handleZoomChange(mapInstance.getZoom());
      });
    }
  }, [mapInstance, handleZoomChange]);

  React.useEffect(() => {
    // get marker at zoom
    const markersAtCurrentZoom = markersRef.current[hZoom] || [];
    const configAtCurrentZoom = config[hZoom] || [];
    // remove unneccasary marker
    markersAtCurrentZoom.forEach((marker, index) => {
      const markerLoc = marker.getPosition();
      const isFound = configAtCurrentZoom.find((loc) => {
        return (
          Number(loc.lat) === markerLoc.lat() &&
          Number(loc.lng) === markerLoc.lng()
        );
      });
      if (!isFound) {
        console.log("Remove Marker");
        marker.setMap(null);
        markersAtCurrentZoom.splice(index, 1);
      }
    });
    // add marker if not present
    configAtCurrentZoom.forEach((loc) => {
      const isFound = markersAtCurrentZoom.find((marker) => {
        const markerPosition = marker.getPosition();
        return (
          Number(loc.lat) === markerPosition.lat() &&
          Number(loc.lng) === markerPosition.lng()
        );
      });
      if (!isFound) {
        console.log("Add Marker");
        const marker = addImgMarker({
          url: loc.path,
          lat: loc.lat,
          lng: loc.lng,
        });
        marker.addListener("click", () => {
          handleUpdateConfig(loc, "REMOVE");
        });

        markersAtCurrentZoom.push(marker);
      }
    });
    markersRef.current[hZoom] = markersAtCurrentZoom;
  }, [config, hZoom]);

  React.useEffect(() => {
    let listener;
    if (icon) {
      listener = mapInstance.addListener("click", (event) => {
        const location = event.latLng;
        const zoom = mapInstance.getZoom();
        handleUpdateConfig(
          { lat: location.lat(), lng: location.lng(), zoom },
          "ADD"
        );
      });
    }

    return () => window.google.maps.event.removeListener(listener);
  }, [icon, hZoom]);

  return null;
};

export default CustomMap;
