import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { resetRedirect } from "../../actions/redirectActions";
import CellForm from "../../components/forms/cellForm";
import ChunkForm from "../../components/forms/chunkForm";
import QuestForm from "../../components/forms/questForm";
import LoadingSpinner from "../../components/general/loadingSpinner";

const FormPage = ({ router, formType, data }) => {
  const dispatch = useDispatch();
  const redirectPath = useSelector((state) => state.redirects.redirectTo);
  let form = null;
  let slug;
  let object;

  const redirectAfterSuccess = () => {
    if (redirectPath) {
      setTimeout(() => {
        dispatch(resetRedirect());
      }, 50);
      return <Redirect to={redirectPath} />;
    }
  };

  if (router) {
    slug = router.match.params.slug;
    object = filterDataBySlug(data, slug);
  }

  // Determine which form to render
  switch (formType) {
    // New Cell
    case "new-cell":
      form = <CellForm mode="new" />;
      break;
    // Edit Cell
    case "edit-cell":
      if (object) {
        form = <CellForm mode="edit" cell={object} />;
      }
      break;
    case "new-quest":
      form = <QuestForm mode="new" />;
      break;
    case "edit-quest":
      if (object) {
        form = <QuestForm mode="edit" quest={object} />;
      }
      break;
    case "edit-chunk":
      if (object) {
        form = <ChunkForm mode="edit" chunk={object} />;
      }
      break;
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

const filterDataBySlug = (data, slug) => {
  if (data) {
    return data.filter((data) => data.slug === slug)[0];
  }
};

export default FormPage;
