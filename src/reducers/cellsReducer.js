function cells(state = { cells: [] }, action) {
  switch (action.type) {
    // add cases here for manipulating cell states
    case "CREATE_CELL":
    case "LOAD_CELLS":
    case "EDIT_CELL":
    case "DELETE_CELL":
    case "SET_ACTIVE_CELL":
    case "RESET_ACTIVE_CELL":
    default:
      return state;
  }
}

export default cells;
