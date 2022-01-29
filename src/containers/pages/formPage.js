import { Container } from "react-bootstrap";
import CellForm from "../../components/forms/cellForm";

const FormPage = (props) => {
  let form;
  switch (props.form) {
    case "new-cell":
      form = <CellForm mode="new" />;
      break;
    case "edit-cell":
      // TODO: connect to redux
      form = <CellForm mode="edit" />;
      // TODO: pass in cell prop to this version
      break;
    default:
      form = <div>No form to display</div>;
      break;
  }

  return <Container>{form}</Container>;
};

export default FormPage;
