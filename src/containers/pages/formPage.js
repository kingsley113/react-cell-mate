import { Container } from "react-bootstrap";
import CellForm from "../../components/forms/cellForm";
import LoadingSpinner from "../../components/general/loadingSpinner";

const FormPage = ({ router, formType, data }) => {
  const id = router.match.params.id;
  // console.log("Data: ", data);
  const object = filterDataById(data, id);
  // console.log("Object: ", object);
  let form;
  switch (formType) {
    case "new-cell":
      form = <CellForm mode="new" />;
      break;
    case "edit-cell":
      form = <CellForm mode="edit" cell={object} />;
      break;
    default:
      form = <div>No form to display</div>;
      break;
  }
  if (object) {
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
