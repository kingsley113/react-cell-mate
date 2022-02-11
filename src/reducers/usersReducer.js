function users(state = { users: [] }, action) {
  switch (action.type) {
    case "CREATE_USER":
    case "LOAD_USERS":
      return { ...state, allUsers: action.users };
    case "EDIT_USER":
    case "DELETE_USER":
    case "SET_CURRENT_USER":
      return { ...state, currentUser: action.currentUser };
    case "LOGOUT":
      return { currentUser: null };
    default:
      return state;
  }
}

export default users;
