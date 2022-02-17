import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CellMap = ({ cells, colorMode }) => {
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
              trigger={["hover", "focus"]}
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

  return (
    <div className="centered-container">
      <div id="cell-grid-container">{renderCells(cells, colorMode)}</div>
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
