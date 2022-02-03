function cells(state = { tasks: [] }, action) {
  switch (action.type) {
    // add cases here for manipulating cell states
    case "CREATE_TASK":
    case "LOAD_TASK":
      return { allTasks: action.tasks };
    case "EDIT_TASK":
    case "DELETE_TASK":
    case "SET_ACTIVE_TASK":
    case "RESET_ACTIVE_TASK":
    default:
      return state;
  }
}

export default cells;
