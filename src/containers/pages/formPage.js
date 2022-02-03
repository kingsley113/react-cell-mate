import { Container } from "react-bootstrap";
import CellForm from "../../components/forms/cellForm";

const FormPage = ({ formType, data }) => {
  let form;
  switch (formType) {
    case "new-cell":
      form = <CellForm mode="new" />;
      break;
    case "edit-cell":
      // TODO: connect to redux
      form = <CellForm mode="edit" cells={data} />;
      // TODO: pass in cell prop to this version
      break;
    default:
      form = <div>No form to display</div>;
      break;
  }

  return <Container>{form}</Container>;
};

export default FormPage;
