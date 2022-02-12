import { Redirect } from "react-router";

const ProtectedRoute = (props) => {
  if (localStorage.getItem("cellMateJWT")) {
    return props.children;
  } else {
    console.log("======Redirecting Due to Unauthorized Access=======");
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
