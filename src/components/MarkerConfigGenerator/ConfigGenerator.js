/**
 * Entry point for the application to collect POIs
 */
import * as React from "react";
import CustomMap from "./CustomMap";
import Sidebar from "./Sidebar";
import MARKER_ICONS from "../../components/common/config/available_icons.json";
import { GMAP } from "../../constants";

const ConfigGenerator = () => {
  const [config, setConfig] = React.useState({});
  const [selectedIcon, setSelectedIcon] = React.useState();
  const [holidayZoom, setHolidayZoom] = React.useState(GMAP.CONFIG.zoom - 4);

  const updateIcon = (key) => {
    setSelectedIcon(key);
  };

  const updateConfig = (location, type) => {
    setConfig((config) => {
      //TODO: this is called twice
      let updated;
      const configForZoom = config[holidayZoom] || [];
      if (type === "ADD") {
        updated = configForZoom.concat([
          {
            path: selectedIcon,
            lat: location.lat.toFixed(3),
            lng: location.lng.toFixed(3),
          },
        ]);
      } else if (type === "REMOVE") {
        updated = configForZoom.filter((c) => {
          return c.lat !== location.lat && c.lng !== location.lng;
        });
      }
      return { ...config, [holidayZoom]: updated };
    });
  };

  let icons = MARKER_ICONS.map((icon) => `${icon.path}`);
  icons = [...new Set(icons)];
  return (
    <React.Fragment>
      <CustomMap
        icon={selectedIcon}
        handleUpdateConfig={updateConfig}
        handleZoomChange={(zoom) => setHolidayZoom(zoom - 4)}
        config={config}
        hZoom={holidayZoom}
      ></CustomMap>
      <Sidebar
        handleIconChange={updateIcon}
        selected={selectedIcon}
        config={config}
        icons={icons}
        hZoom={holidayZoom}
        handleSetConfig={setConfig}
      ></Sidebar>
    </React.Fragment>
  );
};

export default ConfigGenerator;
