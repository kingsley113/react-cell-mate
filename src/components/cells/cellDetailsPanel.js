import { ListGroup, ProgressBar } from "react-bootstrap";

const CellDetailsPanel = ({ cell }) => {
  return (
    <ListGroup id="cell-details-panel" className="panel-border">
      <ListGroup.Item>Description: {cell.description}</ListGroup.Item>
      <ListGroup.Item>X Coord: {cell.ck_coordinate_x}</ListGroup.Item>
      <ListGroup.Item>Y Coord: {cell.ck_coordinate_y}</ListGroup.Item>
      <ListGroup.Item>
        <ProgressBar
          now={cell.percent_complete}
          label={`${cell.percent_complete}% Complete`}
        />
      </ListGroup.Item>
      <ListGroup.Item>Priority: {cell.priority}</ListGroup.Item>
      <ListGroup.Item>Region: {cell.region.name}</ListGroup.Item>
      <ListGroup.Item>User: {cell.user.display_name}</ListGroup.Item>
      <ListGroup.Item>Worldspace: {cell.worldspace.name}</ListGroup.Item>
    </ListGroup>
  );
};

export default CellDetailsPanel;

// TODO: load tasks from backend
// TODO: load quests from redux
