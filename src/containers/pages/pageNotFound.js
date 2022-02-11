import { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Lost in the Wasteland";
  }, []);

  return <h2>Looks like your lost in the wasteland, Page not found. 404, </h2>;
  // TODO:
};

export default PageNotFound;
