function worldspaces(state = { worldspaces: [] }, action) {
  switch (action.type) {
    case "LOAD_WORLDSPACES":
      return { allWorldspaces: action.worldspaces };
    default:
      return state;
  }
}

export default worldspaces;
