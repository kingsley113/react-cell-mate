import { Redirect } from "react-router-dom";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";

const LoginPage = () => {
  return (
    <div>
      <RedirectIfLoggedIn>login form here TODO:</RedirectIfLoggedIn>
    </div>
  );
};

export default LoginPage;
