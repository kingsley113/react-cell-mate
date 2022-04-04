import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CellMap from "../../components/cellMap/cellMap";
import ColorModeSelector from "../../components/cellMap/colorModeSelector";

const CellMapPage = (props) => {
  const [colorMode, setColorMode] = useState("cell_color");
  const cells = useSelector((state) => state.cells.allCells);
  const chunks = useSelector((state) => state.chunks.allChunks);

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
      case "cell_chunks":
        return "Cell Chunk View";
      default:
        return;
    }
  };

  return (
    <div>
      <h2>Cell Map - {renderColorMode()}</h2>
      <ColorModeSelector getModeInput={setColorMode} />
      <CellMap colorMode={colorMode} cells={cells} chunks={chunks} />
    </div>
  );
};

export default CellMapPage;
