import { Form } from "react-bootstrap";

const ColorModeSelector = ({ getModeInput }) => {
  const handleOnChange = (event) => {
    getModeInput(event.target.id);
  };

  return (
    <Form onChange={(e) => handleOnChange(e)}>
      <Form.Check
        inline
        label="Cell Color"
        name="color-selector-radio"
        id="cell_color"
        type="radio"
      />
      <Form.Check
        inline
        label="User Color"
        name="color-selector-radio"
        id="user_color"
        type="radio"
      />
      <Form.Check
        inline
        label="Cell Progress"
        name="color-selector-radio"
        id="cell_progress"
        type="radio"
      />
      <Form.Check
        inline
        label="Chunks"
        name="color-selector-radio"
        id="cell_chunks"
        type="radio"
      />
    </Form>
  );
};

export default ColorModeSelector;
