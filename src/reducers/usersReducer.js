function users(state = { users: [] }, action) {
  switch (action.type) {
    case "LOAD_USERS":
      return { ...state, allUsers: action.users };
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    case "LOGOUT":
      return { currentUser: null };
    default:
      return state;
  }
}

export default users;
