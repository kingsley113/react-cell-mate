function maps(state = { map: [] }, action) {
  switch (action.type) {
    case "SET_RENDER_MODE":
      return { renderMode: action.mode };
    default:
      return state;
  }
}

export default maps;
