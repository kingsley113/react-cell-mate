import { Redirect } from "react-router";

const ProtectedRoute = (props) => {
  if (localStorage.getItem("jwt")) {
    return props.children;
  } else {
    console.log("======Redirecting Due to not logged in=======");
    // alert("You must be logged in to continue");
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
