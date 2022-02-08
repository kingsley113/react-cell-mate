import { OverlayTrigger, Popover } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CellMap = ({ cells, colorMode }) => {
  const history = useHistory();
  const renderCells = (cells, mode) => {
    let cellObjects = [];

    const generateCellColor = (cell, colorMode) => {
      switch (colorMode) {
        case "cell_color":
          return cell.color;
        case "user_color":
          return cell.user.color;
        case "cell_progress":
          return generateProgressColor(cell.percent_complete);
      }
    };

    const cellInfoPanel = (cell) => {
      return (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{cell.name}</Popover.Header>
          <Popover.Body>
            X: {cell.ck_coordinate_x}
            Y: {cell.ck_coordinate_y}
            Color: {cell.color}
            User: {cell.user ? cell.user.display_name : ""}
            Progress: {cell.percent_complete}% Complete
          </Popover.Body>
        </Popover>
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
            >
              <div
                className="cell-block"
                style={{
                  gridColumnStart: cell.coordinate_x,
                  gridRowStart: cell.coordinate_y,
                  backgroundColor: generateCellColor(cell, colorMode),
                }}
                onClick={() => history.push(`/cells/${cell.id}`)}
              ></div>
            </OverlayTrigger>
          );
        }
      });

      return cellObjects;
    }
  };

  return <div id="cell-grid-container">{renderCells(cells, colorMode)}</div>;
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
  }
};

export default CellMap;

// TODO: make map responsive to size?
// TODO: add legend for each color mode, this should be on cell map page?
