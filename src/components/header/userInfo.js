import { Link } from "react-router-dom";

const CurrentUserPanel = () => {
  const currentUser = JSON.parse(localStorage.getItem("cellMateCurrentUser"));
  if (currentUser) {
    const { display_name, image } = currentUser;

    return (
      <Link to="/users/profile" id="current-user-panel">
        {display_name}
        <img src={image} alt={`${display_name}'s avatar`} id="avatar-img" />
      </Link>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default CurrentUserPanel;
