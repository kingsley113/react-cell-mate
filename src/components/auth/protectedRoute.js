import { Redirect } from "react-router";

const ProtectedRoute = (props) => {
  if (localStorage.getItem("cellMateJWT")) {
    return props.children;
  } else {
    console.log("======Redirecting Due to Unauthorized Access=======");
    // alert("You must be logged in to continue");
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
