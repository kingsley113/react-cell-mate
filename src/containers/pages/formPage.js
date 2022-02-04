import { Container } from "react-bootstrap";
import CellForm from "../../components/forms/cellForm";
import LoadingSpinner from "../../components/general/loadingSpinner";

const FormPage = ({ router, formType, data }) => {
  let id;
  let object;
  // if ((formType = "edit-cell")) {
  // console.log("Data: ", data);
  // console.log("Object: ", object);
  // }
  let form = null;

  switch (formType) {
    case "new-cell":
      form = <CellForm mode="new" />;
      break;
    case "edit-cell":
      id = router.match.params.id;
      object = filterDataById(data, id);
      form = <CellForm mode="edit" cell={object} />;
      break;
    default:
      form = <div>No form to display</div>;
      break;
  }
  if (form) {
    return <Container>{form}</Container>;
  } else {
    return <LoadingSpinner />;
  }
};

const filterDataById = (data, id) => {
  // console.log(data);
  // console.log("ID: ", id);
  if (data) {
    // console.log("Id & Data: ", id, data);
    return data.filter((data) => Number(data.id) === Number(id))[0];
  }
};

export default FormPage;
