import { ListGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const RecentCellListItem = (cellObj) => {
  const history = useHistory();
  const cell = cellObj.cell;
  return (
    <ListGroup.Item
      action
      key={cell.id}
      onClick={() => history.push(`/cells/${cell.id}`)}
      className="list-group-item"
    >
      {cell.name} - {cell.region.name}
    </ListGroup.Item>
  );
};

export default RecentCellListItem;
