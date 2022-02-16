import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";

const LoginPage = () => {
  useEffect(() => {
    document.title = "CellMate Login";
  }, []);

  const [gatewayPass, setGatewayPass] = useState("");
  const gatewayAccessCode = process.env.REACT_APP_GATEWAY_ACCESS_CODE;

  useEffect(() => {
    sessionStorage.setItem("gateway-authenticated", false);
  }, []);

  const handleOnChange = (event) => {
    setGatewayPass(event.target.value);
  };

  const handleOnClick = () => {
    console.log(gatewayAccessCode);
    gatewayPass === gatewayAccessCode
      ? (window.location.href = `${process.env.REACT_APP_API_URL}/auth/discord`)
      : alert("Incorrect Access Code");
  };

  return (
    <div>
      <RedirectIfLoggedIn>
        <div id="page-main">
          <div>
            <img src="./cascadia_banner.png" alt="fallout cascadia banner" />
          </div>
          <div>
            <img
              src="./cell-mate-logo.svg"
              alt="CellMate Logo"
              className="cellmate-logo"
            />
          </div>
          <div className="pagination margin-top-20">
            <Form.Group
              className="mb-3 gateway-password-field"
              controlId="gateway-password"
            >
              <Form.Label>Enter Super Top Secret Access Code:</Form.Label>
              <Form.Control
                type="password"
                value={gatewayPass}
                placeholder="password"
                onChange={(e) => handleOnChange(e)}
                className="gateway-password-field"
              ></Form.Control>
            </Form.Group>
          </div>
          <div>
            <Button onClick={() => handleOnClick()}>
              <h3>Login with</h3>
              <img
                src="./Discord-Logo+Wordmark-White.svg"
                alt="Discord Logo"
                className="width-300"
              />
            </Button>
          </div>
        </div>
      </RedirectIfLoggedIn>
    </div>
  );
};

export default LoginPage;
