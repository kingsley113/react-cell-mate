import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CellMap = ({ cells, colorMode, chunks }) => {
  const history = useHistory();

  const renderCells = (cells, mode) => {
    const generateCellColor = (cell, colorMode) => {
      switch (colorMode) {
        case "cell_color":
          return cell.color;
        case "user_color":
          return cell.user ? cell.user.color : "";
        case "cell_progress":
          return generateProgressColor(cell.percent_complete);
        case "cell_chunks":
          return cell.color;
      }
    };

    const cellInfoPanel = (cell) => {
      return (
        <Tooltip id="tooltip-basic">
          <div className="tooltip-body">
            <div>{cell.name}</div>
            <div>
              X: {cell.ck_coordinate_x} Y: {cell.ck_coordinate_y}
            </div>
            <div>User: {cell.user ? cell.user.display_name : ""}</div>
            <div>Progress: {cell.percent_complete}% Complete</div>
          </div>
        </Tooltip>
      );
    };

    if (cells) {
      const cellObjects = cells.map((cell) => {
        if (cell.worldspace.name === "Pacific Wasteland") {
          return (
            <OverlayTrigger
              key={cell.id}
              trigger={colorMode !== "cell_chunks" && ["hover", "focus"]}
              placement="top"
              overlay={cellInfoPanel(cell)}
              id="tooltip-basic"
            >
              <div
                className="cell-block"
                style={{
                  gridColumnStart: cell.coordinate_x,
                  gridRowStart: cell.coordinate_y,
                  backgroundColor: generateCellColor(cell, colorMode),
                }}
                onClick={() => history.push(`/cells/${cell.slug}`)}
              ></div>
            </OverlayTrigger>
          );
        }
      });

      return cellObjects;
    }
  };

  const renderChunks = (chunks) => {
    const chunkInfoPanel = (chunk) => {
      return (
        <Tooltip id="tooltip-basic">
          <div className="tooltip-body">
            <div>{chunk.name}</div>
            <div>User: {chunk.user ? chunk.user.display_name : "-----"}</div>
            <div>Status: {chunk.status}</div>
          </div>
        </Tooltip>
      );
    };

    if (chunks) {
      const chunkElemenets = chunks.map((chunk) => {
        return (
          <OverlayTrigger
            key={chunk.id}
            trigger={["hover", "focus"]}
            placement="top"
            overlay={chunkInfoPanel(chunk)}
            id="tooltip-basic"
          >
            <div
              className="chunk-block"
              style={{
                gridColumnStart: chunk.grid_x,
                gridRowStart: chunk.grid_y,
                gridColumnEnd: chunk.grid_x + chunk.width_x,
                gridRowEnd: chunk.grid_y + chunk.height_y,
                backgroundColor: setBackgroundColor(chunk),
              }}
              onClick={() => history.push(`/chunks/${chunk.slug}`)}
            ></div>
          </OverlayTrigger>
        );
      });

      return chunkElemenets;
    }
  };

  const setBackgroundColor = (chunk) => {
    switch (chunk.status) {
      case "Unassigned":
        return "#0088924d";
      case "In Progress":
        return "#ffd93181";
      case "Complete":
        return "#00ff0081";
      default:
        return "#0088924d";
    }
  };

  return (
    <div className="centered-container">
      <div id="cell-grid-container">
        {/* {colorMode !== "cell_chunks" && renderCells(cells, colorMode)} */}
        {renderCells(cells, colorMode)}
        {colorMode === "cell_chunks" && renderChunks(chunks)}
      </div>
    </div>
  );
};

const generateProgressColor = (percentComplete) => {
  const value = Math.ceil(percentComplete / 10) * 10;
  switch (value) {
    case 0:
      return "#FF3300";
    case 10:
      return "#ff6600";
    case 20:
      return "#ff9900";
    case 30:
      return "#FFCC00";
    case 40:
      return "#FFFF00";
    case 50:
      return "#ccff00";
    case 60:
      return "#99ff00";
    case 70:
      return "#66ff00";
    case 80:
      return "#33ff00";
    case 90:
      return "#00FF00";
    case 100:
      return "#00FF00";
    default:
      return "#FF3300";
  }
};

export default CellMap;
