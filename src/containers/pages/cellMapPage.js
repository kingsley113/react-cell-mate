import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CellMap from "../../components/cellMap/cellMap";
import ColorModeSelector from "../../components/cellMap/colorModeSelector";

const CellMapPage = (props) => {
  const [colorMode, setColorMode] = useState("cell_color");
  const cells = useSelector((state) => state.cells.allCells);

  useEffect(() => {
    document.title = "Cell Map";
  }, []);

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
};

export default CellMapPage;
