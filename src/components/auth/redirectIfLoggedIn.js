import { connect } from "react-redux";
import { Redirect } from "react-router";

const RedirectIfLoggedIn = (props) => {
  // if jwt is present then return a redirect object to home
  if (localStorage.getItem("cellMateJWT") || props.loggedIn) {
    return <Redirect to="/" />;
  } else {
    return props.children;
  }
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.redirectToDashboard,
  };
};

export default connect(mapStateToProps)(RedirectIfLoggedIn);
