import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/authActions";

const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.title = "User Info";
  }, []);

  const handleClick = () => {
    // delete tokens and current user
    dispatch(logout());
    // redirect to login
    history.push("/login");
  };
  return (
    <div>
      <Button variant="danger" onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
};

export default UserPage;

// TODO: admin panel - show if user has admin rights
// TODO: admin panel - delete users
