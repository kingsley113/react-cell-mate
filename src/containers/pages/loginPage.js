import { Nav } from "react-bootstrap";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";

const LoginPage = () => {
  return (
    <div>
      <RedirectIfLoggedIn>
        <Nav.Link href="http://localhost:8000/auth/discord">
          Login with Discord
        </Nav.Link>
      </RedirectIfLoggedIn>
    </div>
  );
};

export default LoginPage;
