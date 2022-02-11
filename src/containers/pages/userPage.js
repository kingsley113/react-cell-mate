import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
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

  const handleLightModeClick = () => {
    alert("No. Just no.");
  };

  return (
    <div className="flex-vert margin-top width-full" id="user-info-panel">
      <h3>User Options</h3>
      <div>
        <Button variant="danger" onClick={handleClick} className="width-200">
          Logout
        </Button>
      </div>
      <div className="centered-container">
        <Form.Check
          type="switch"
          id="light-mode-switch"
          onClick={() => handleLightModeClick()}
          label="Light Mode"
          className="width-200"
        />
      </div>
    </div>
  );
};

export default UserPage;

// TODO: admin panel - show if user has admin rights
// TODO: admin panel - delete users
