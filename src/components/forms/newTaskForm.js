import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const NewTaskForm = () => {
  const [taskName, setTaskName] = useState("");
  console.log(taskName);
  return (
    <Form onSubmit={(event) => handleOnSubmit(event)}>
      <Form.Label htmlFor="taskTitle">New Task:</Form.Label>
      <Form.Control
        type="text"
        id="taskTitle"
        onChange={(event) => setTaskName(event.target.value)}
        value={taskName}
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

const handleOnSubmit = (event) => {
  event.preventDefault();
  console.log("new task form submitted!");
  // TODO: call dispatch
};

export default NewTaskForm;
