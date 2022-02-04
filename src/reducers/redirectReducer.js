function redirects(state = { redirects: [] }, action) {
  switch (action.type) {
    case "REDIRECT":
      return { redirectTo: action.url };
    case "REDIRECT_RESET":
      return state;
    default:
      return state;
  }
}

export default redirects;
