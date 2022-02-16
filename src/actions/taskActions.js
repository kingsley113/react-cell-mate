// import { apiURL } from "./fetchConfig";

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
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/tasks`, configurationObject)
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
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/tasks/${task.id}/complete`,
      configurationObject
    )
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
export const deleteTask = (task) => {
  return (dispatch) => {
    const configurationObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify(task),
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/tasks/${task.id}`,
      configurationObject
    )
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
// update task?
