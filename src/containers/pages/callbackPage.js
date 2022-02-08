import { Redirect } from "react-router-dom";

const CallbackPage = (routerProps) => {
  const jwt = routerProps.location.search.split("?token=")[1];
  if (jwt) {
    localStorage.setItem("cellMateJWT", jwt);
    return <Redirect to="/" />;
  } else {
    return <Redirect tp="/login" />;
  }
};

export default CallbackPage;
