import { ListGroup, ProgressBar } from "react-bootstrap";

const CellDetailsPanel = ({ cell }) => {
  return (
    <ListGroup id="cell-details-panel" variant="flush">
      <h4>Details</h4>
      <ListGroup.Item>
        <span>Description:</span> <span>{cell.description}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <ProgressBar
          id="cell-progress"
          now={cell.percent_complete}
          label={`${cell.percent_complete}% Complete`}
        />
      </ListGroup.Item>
      <ListGroup.Item>
        <span>XY Coordinates: </span>
        <span>
          {cell.ck_coordinate_x}, {cell.ck_coordinate_y}
        </span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span>Priority:</span>
        <span>{cell.priority}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span>Region:</span>
        <span>{cell.region ? cell.region.name : "---"}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span>User:</span>
        <span>{cell.user ? cell.user.display_name : "---"}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span>Worldspace:</span>
        <span>{cell.worldspace.name}</span>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CellDetailsPanel;
