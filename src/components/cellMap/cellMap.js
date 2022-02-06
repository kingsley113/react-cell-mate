import { OverlayTrigger, Popover } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CellMap = ({ cells, colorMode }) => {
  const history = useHistory();
  const renderCells = (cells, mode) => {
    let cellObjects = [];

    const cellInfoPanel = (cell) => {
      return (
        <Popover id="popover-basic">
          <Popover.Header as="h3">{cell.name}</Popover.Header>
          <Popover.Body>
            X: {cell.ck_coordinate_x}
            Y: {cell.ck_coordinate_y}
            Color: {cell.color}
          </Popover.Body>
        </Popover>
      );
    };

    if (cells) {
      for (const cell of cells) {
        // console.log(
        //   cell.name,
        //   " X: ",
        //   cell.coordinate_x,
        //   "Y: ",
        //   cell.coordinate_y
        // );
        cellObjects.push(
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
                backgroundColor: cell.color,
              }}
              onClick={() => history.push(`/cells/${cell.id}`)}
            ></div>
          </OverlayTrigger>
        );
      }
      return cellObjects;
    }
  };

  return <div id="cell-grid-container">{renderCells(cells, colorMode)}</div>;
};

export default CellMap;

// TODO: set up grid layout
// TODO: get background image
// TODO: make map responsive to size?
// TODO: add tooltips on hover to each cell
// TODO: add legend for each color mode, this should be on cell map page?
