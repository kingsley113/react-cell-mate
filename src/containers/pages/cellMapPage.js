import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import CellMap from "../../components/cellMap/cellMap";
import ColorModeSelector from "../../components/cellMap/colorModeSelector";

const CellMapPage = (props) => {
  const [colorMode, setColorMode] = useState("cell_color");
  const cells = useSelector((state) => state.cells.allCells);

  const renderColorMode = () => {
    switch (colorMode) {
      case "cell_color":
        return "Cell Color";
      case "user_color":
        return "User Color";
      case "cell_progress":
        return "Cell % Complete";
      default:
        return;
    }
  };

  return (
    <div>
      <h2>Cell Map - {renderColorMode()}</h2>
      <ColorModeSelector getModeInput={setColorMode} />
      <CellMap colorMode={colorMode} cells={cells} />
    </div>
  );
  // TODO: will need a header, and the map, and show color scale and user legend when on the respective modes
};

export default CellMapPage;

// TODO: use offCanvas panel for legend on map
// TODO: color mode selection, pass in prop to CellMap component for color mode
