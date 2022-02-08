function users(state = { users: [] }, action) {
  switch (action.type) {
    case "CREATE_USER":
    case "LOAD_USERS":
      return { allUsers: action.users };
    case "EDIT_USER":
    case "DELETE_USER":
    case "SET_CURRENT_USER":
      return { currentUser: action.currentUser };
    default:
      return state;
  }
}

export default users;
