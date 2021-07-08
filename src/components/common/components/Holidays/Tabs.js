import React from "react";

const Tabs = () => {
  return (
    <ul className="mapFilter">
      <li className="activeFilter">Explore</li>
      <li>
        Preferences <span className="activeNotification">1</span>
      </li>
    </ul>
  );
};

export default Tabs;
