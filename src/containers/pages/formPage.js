import { Container } from "react-bootstrap";
import CellForm from "../../components/forms/newCellForm";

const FormPage = (props) => {
  let form;
  switch (props.form) {
    case "new-cell":
      form = <CellForm />;
      break;
    case "edit-cell":
      // TODO: connect to redux
      form = <CellForm />;
      // TODO: pass in cell prop to this version
      break;
    default:
      form = <div>No form to display</div>;
      break;
  }

  return <Container>{form}</Container>;
};

export default FormPage;
