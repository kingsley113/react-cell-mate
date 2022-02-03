import { ListGroup, ListGroupItem } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { completeTask } from "../../actions/taskActions";
import NewTaskForm from "../forms/newTaskForm";

const CellTaskPanel = ({ cell, markComplete }) => {
  const renderTasks = (tasks) => {
    let taskItems = [];
    tasks.sort((a, b) => a.id - b.id);

    for (const task of tasks) {
      taskItems.push(
        <ListGroup.Item
          as="li"
          key={task.id}
          onClick={() => markComplete(task)}
          className={task.complete ? "task-complete" : ""}
        >
          {task.name}
        </ListGroup.Item>
      );
    }
    return taskItems;
  };

  return (
    <div>
      <h4>Tasks</h4>
      <ListGroup as="ul">
        {renderTasks(cell.tasks)}
        <ListGroup.Item as="li" key="new">
          <NewTaskForm cell={cell} />
        </ListGroup.Item>
      </ListGroup>
      {/* TODO: add task form */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    markComplete: (task) => dispatch(completeTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(CellTaskPanel);
