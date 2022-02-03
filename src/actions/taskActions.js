import { apiURL } from "./fetchConfig";

// create task
export const createTask = (task) => {
  return (dispatch) => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify(task),
    };
    fetch(`${apiURL}/api/v1/tasks`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "ADD_TASK", cell: json.task });
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
// mark task complete
export const completeTask = (task) => {
  return (dispatch) => {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify(task),
    };
    fetch(`${apiURL}/api/v1/tasks/${task.id}/complete`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "EDIT_CELL", cell: json.cell });
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

// delete task
// update task?
