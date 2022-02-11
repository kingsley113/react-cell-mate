import { useEffect } from "react";
import { Nav } from "react-bootstrap";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";

const LoginPage = () => {
  useEffect(() => {
    document.title = "CellMate Login";
  }, []);

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
