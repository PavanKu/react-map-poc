import * as React from "react";
import "./style.css";

const Sidebar = ({
  config,
  selected,
  handleIconChange,
  icons,
  hZoom,
  handleSetConfig,
}) => {
  const textareaRef = React.useRef(null);
  const handleIconSelect = (event) => {
    const url = event.target.getAttribute("data-icon");
    handleIconChange(url);
  };

  const handleCopyClick = () => {
    textareaRef.current.select();
    textareaRef.current.setSelectionRange(0, 999999999);
    document.execCommand("copy");
    alert("config is copied to clipboard");
  };

  const handleSetConfigClick = () => {
    const input = prompt("Please enter marker config", "{}");
    if (input) {
      try {
        const config = JSON.parse(input);
        handleSetConfig(config);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const renderIconList = () => {
    return icons.map((url) => (
      <img
        key={url}
        data-icon={url}
        className={`icon-container ${url === selected ? "active" : ""}`}
        src={url}
        alt={url}
      />
    ));
  };
  return (
    <div className="sidebar-container">
      <div>
        <h3 className="spaceBetween">
          <span>Available icons</span>
          <span>
            <button type="button" onClick={handleSetConfigClick}>
              Set Config
            </button>
          </span>
        </h3>
        {selected && (
          <h4>
            Selected icon:{" "}
            <img
              className="selected-icon"
              src={selected}
              alt={"selected - icon"}
            />
          </h4>
        )}
        <div onClick={handleIconSelect} className="icon-list">
          {renderIconList()}
        </div>
        <div>
          <h3 className="spaceBetween">
            <span>Marker Config</span>
            <span>
              <button type="button" onClick={handleCopyClick}>
                Copy
              </button>
            </span>
          </h3>
          <h4>Google Zoom: {hZoom + 4}</h4>
          <h4>Holiday Zoom: {hZoom}</h4>
          <textarea
            ref={textareaRef}
            className="config-control"
            value={JSON.stringify(config)}
            rows={8}
            cols={20}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
