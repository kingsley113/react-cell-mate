import { Spinner } from "react-bootstrap";

const LoadingSpinner = () => {
  return (
    <div>
      <h4>LOADING</h4>
      <Spinner animation="border" variant="secondary" />
      <h4>PLEASE STAND BY</h4>
    </div>
  );
};

export default LoadingSpinner;
