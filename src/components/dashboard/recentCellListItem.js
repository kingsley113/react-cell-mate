import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const RecentCellListItem = (cellObj) => {
  const cell = cellObj.cell;
  return (
    <ListGroup.Item key={cell.id}>
      <Link to={`/cells/${cell.id}`}>
        {cell.name} - {cell.region.name}
      </Link>
    </ListGroup.Item>
  );
};

export default RecentCellListItem;
