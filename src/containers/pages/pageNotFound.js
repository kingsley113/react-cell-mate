import { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Lost in the Wasteland";
  }, []);

  return (
    <div>
      <h2>Looks like your lost in the wasteland, Page not found. 404, </h2>{" "}
      <img src="./Loading_screen01.jpeg" alt="fallout loading screen" />
    </div>
  );
  // TODO:
};

export default PageNotFound;
