import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { resetRedirect } from "../../actions/redirectActions";
import CellForm from "../../components/forms/cellForm";
import QuestForm from "../../components/forms/questForm";
import LoadingSpinner from "../../components/general/loadingSpinner";

const FormPage = ({ router, formType, data }) => {
  let id;
  let object;
  const dispatch = useDispatch();
  const redirectPath = useSelector((state) => state.redirects.redirectTo);
  let form = null;

  const redirectAfterSuccess = () => {
    if (redirectPath) {
      dispatch(resetRedirect());
      return <Redirect to={redirectPath} />;
    }
  };

  // Determine which form to render
  switch (formType) {
    // New Cell
    case "new-cell":
      form = <CellForm mode="new" />;
      break;
    // Edit Cell
    case "edit-cell":
      id = router.match.params.id;
      object = filterDataById(data, id);
      if (object) {
        form = <CellForm mode="edit" cell={object} />;
      }
      break;
    // New Quest TODO:
    case "new-quest":
      form = <QuestForm mode="new" />;
      break;
    // Edit Quest TODO:
    default:
      form = <div>No form to display</div>;
      break;
  }

  // Render the form or loading spinner
  if (form) {
    return (
      <Container>
        {form}
        {redirectAfterSuccess()}
      </Container>
    );
  } else {
    return <LoadingSpinner />;
  }
};

const filterDataById = (data, id) => {
  if (data) {
    return data.filter((data) => Number(data.id) === Number(id))[0];
  }
};

export default FormPage;
