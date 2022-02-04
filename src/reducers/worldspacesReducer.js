function worldspaces(state = { worldspaces: [] }, action) {
  switch (action.type) {
    case "ADD_REGION":
    case "LOAD_WORLDSPACES":
      return { allWorldspaces: action.worldspaces };
    case "EDIT_REGION":
    case "DELETE_REGION":
    default:
      return state;
  }
}

export default worldspaces;
