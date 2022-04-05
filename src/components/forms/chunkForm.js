import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { editChunk } from "../../actions/chunkActions";

const ChunkForm = ({ mode, chunk }) => {
  const [formState, setFormState] = useState({});
  const users = useSelector((state) => state.users.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mode === "edit") {
      loadCellData(chunk);
    }
  }, [mode, chunk]);

  const loadCellData = (chunk) => {
    setFormState(() => {
      const chunkCopy = { ...chunk };
      if (chunk.user) chunkCopy.user_id = chunkCopy.user.id;
      return chunkCopy;
    });
  };

  const handleOnChange = (event) => {
    setFormState((prev) => {
      const prevCopy = { ...prev };
      prevCopy[event.target.name] = event.target.value;
      return prevCopy;
    });
  };

  // useEffect(() => {
  //   console.log("State: ", formState);
  // });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (mode === "edit") {
      dispatch(editChunk(formState));
    }
  };

  const renderUserSelectionOptions = (users) => {
    const elements = users.map((user) => {
      return (
        <option value={user.id} key={user.id}>
          {user.display_name}
        </option>
      );
    });
    elements.unshift(
      <option value="" key={0}>
        None
      </option>
    );
    return elements;
  };

  return (
    <div>
      <h2>Edit Chunk </h2>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formChunkUser">
          <Form.Label>Assigned User</Form.Label>
          <Form.Select
            aria-label="Chunk User"
            name="user_id"
            value={formState.user_id}
            onChange={handleOnChange}
          >
            {renderUserSelectionOptions(users)}
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="mb-3 col-25 padded-right padded-left"
          controlId="formChunkStatus"
        >
          <Form.Label>Status</Form.Label>
          <Form.Select
            aria-label="Chunk Status"
            name="status"
            value={formState.status}
            onChange={handleOnChange}
          >
            <option value="Unassigned">Unassigned</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Chunk
        </Button>
        <Button variant="danger" onClick={() => window.history.back()}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default ChunkForm;
