import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createTask } from "../../actions/taskActions";

const NewTaskForm = ({ cell }) => {
  const [taskName, setTaskName] = useState("");
  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("new task form submitted!");
    // TODO: call dispatch
    const task = {
      name: taskName,
      cell_id: cell.id,
      complete: false,
    };
    console.log(task);
    dispatch(createTask(task));
    setTaskName("");
  };

  return (
    <Form onSubmit={(event) => handleOnSubmit(event)}>
      <Form.Label htmlFor="taskTitle">
        <h4>New Task:</h4>
      </Form.Label>
      <Form.Control
        type="text"
        id="taskTitle"
        onChange={(event) => setTaskName(event.target.value)}
        value={taskName}
      />
      <Button
        type="submit"
        disabled={taskName === "" ? true : false}
        variant={taskName === "" ? "secondary" : "primary"}
      >
        Add Task
      </Button>
    </Form>
  );
};

export default NewTaskForm;
