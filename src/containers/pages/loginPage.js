import OAuth2Login from "react-simple-oauth2-login/dist/OAuth2Login";
import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";
import LoginForm from "../../components/forms/loginForm";

const LoginPage = () => {
  const onSuccess = (response) => console.log(response);
  const onFailure = (response) => console.log(response);

  return (
    <div>
      <RedirectIfLoggedIn>
        login form here TODO:
        <LoginForm />
        <OAuth2Login
          id="oauth-login-button"
          authorizationUrl={process.env.REACT_APP_DISCORD_AUTHORIZATION_URL}
          clientId={process.env.REACT_APP_DISCORD_OAUTH_CLIENT_ID}
          redirectUri={process.env.REACT_APP_DISCORD_OAUTH_REDIRECT_URI}
          responseType="code"
          buttonText="Discord Login"
          // TODO: set this to the actual uri
          onSuccess={onSuccess}
          onFailure={onFailure}
          isCrossOrigin={true}
        />
      </RedirectIfLoggedIn>
    </div>
  );
};

export default LoginPage;
