import { Button, ListGroup, ListGroupItem, Nav } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../actions/taskActions";
import NewTaskForm from "../forms/newTaskForm";

const CellTaskPanel = ({ cell, markComplete, deleteTask }) => {
  const renderTasks = (tasks) => {
    let taskItems = [];
    tasks.sort((a, b) => a.id - b.id);

    for (const task of tasks) {
      taskItems.push(
        <ListGroup.Item
          // as="li"
          key={task.id}
          onClick={() => markComplete(task)}
          className={
            task.complete ? "task-complete list-group-item" : "tlist-group-item"
          }
          action
        >
          {task.name}
          <div onClick={() => deleteTask(task)}>
            {/* <Button size="sm" variant="primary" onClick={() => deleteTask(task)}> */}
            Delete
            {/* </Button> */}
          </div>
        </ListGroup.Item>
      );
    }
    return taskItems;
  };

  return (
    // <div>
    // <h4>Tasks</h4>
    // {/* <ListGroup as="ul"> */}
    <ListGroup id="cell-tasks-panel" variant="flush">
      <h4>Tasks</h4>

      {renderTasks(cell.tasks)}
      <ListGroup.Item key="new">
        {/* <ListGroup.Item as="li" key="new"> */}
        <NewTaskForm cell={cell} />
      </ListGroup.Item>
    </ListGroup>
    // {/* TODO: add task form */}
    // </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    markComplete: (task) => dispatch(completeTask(task)),
    deleteTask: (task) => dispatch(deleteTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(CellTaskPanel);
