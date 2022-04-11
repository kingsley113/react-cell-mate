import { ListGroup } from "react-bootstrap";

const ChunkDetailsPanel = ({ chunk }) => {
  return (
    <ListGroup id="chunk-details-panel" variant="flush">
      <h4>Details</h4>
      <ListGroup.Item>
        <span>Title:</span> <span>{chunk.name}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span>Status:</span> <span>{chunk.status}</span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span>XY Coordinates: </span>
        <span>
          {chunk.cell_ref_x_coord}, {chunk.cell_ref_y_coord}
        </span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span>User:</span>
        <span>{chunk.user ? chunk.user.display_name : "---"}</span>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ChunkDetailsPanel;
