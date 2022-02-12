function cells(state = { tasks: [] }, action) {
  switch (action.type) {
    // add cases here for manipulating cell states
    case "CREATE_TASK":
    case "LOAD_TASK":
      return { allTasks: action.tasks };
    default:
      return state;
  }
}

export default cells;
