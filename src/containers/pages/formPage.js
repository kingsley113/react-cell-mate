import NewCellForm from "../../components/forms/newCellForm";

const FormPage = (props) => {
  switch (props.form) {
    case "new-cell":
      return <NewCellForm />;
    case "edit-cell":
    // TODO: connect to redux
    default:
      return <div>No form to display</div>;
  }
};

export default FormPage;
