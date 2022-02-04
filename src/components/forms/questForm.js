import React, { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createQuest, editQuest } from "../../actions/questActions";
import randomColorGenerator from "../../helpers/randomColorGenerator";

class QuestForm extends Component {
  state = {
    formTitle: "New Quest",
    title: "",
    summary: "",
    details: "",
    wiki_link: "",
    category: "",
    cell_ids: [],
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    if (this.props.mode === "edit") {
      this.loadQuestData(this.props.quest);
      this.setState({ formTitle: "Edit Quest" });
    }
  }

  loadCellData = (quest) => {
    this.setState({
      id: quest.id,
      title: quest.title,
      summary: quest.summary,
      details: quest.details,
      wiki_link: quest.wiki_link,
      category: quest.category,
      cell_ids: quest.cell_ids,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    if (this.props.mode === "new") {
      this.props.createQuest(this.state);
    } else {
      this.props.editQuest(this.state);
    }
  };

  // renderOptionItems = (data) => {
  //   let items = [];
  //   if (data) {
  //     for (const item of data) {
  //       items.push(
  //         <option value={item.id} key={item.id}>
  //           {item.name}
  //         </option>
  //       );
  //     }
  //   }
  //   return items;
  // };

  // renderUserOptionItems = (data) => {
  //   let items = [];
  //   items.push(
  //     <option value="" key={0}>
  //       None
  //     </option>
  //   );
  //   if (data) {
  //     for (const item of data) {
  //       items.push(
  //         <option value={item.id} key={item.id}>
  //           {item.display_name}
  //         </option>
  //       );
  //     }
  //   }
  //   return items;
  // };
  // TODO: improve these two render item methods, DRY

  // TODO: update this to quest data
  render() {
    return (
      <div>
        <h2>{this.state.formTitle}</h2>
        <Form onSubmit={this.handleOnSubmit}>
          {/* title */}
          <Form.Group className="mb-3" controlId="formQuestTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter quest title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* summary */}
          <Form.Group className="mb-3" controlId="formQuestSummary">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter quest summary"
              name="summary"
              value={this.state.summary}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          {/* TODO: updated to here */}
          {/* priority */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              aria-label="Cell Priority"
              name="priority"
              value={this.state.priority}
              onChange={this.handleOnChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
            </Form.Select>
          </Form.Group>

          {/* coordinate x */}
          <Form.Group className="mb-3" controlId="formCellCoordX">
            <Form.Label>CK Coordinate X</Form.Label>
            <Form.Control
              type="number"
              name="ck_coordinate_x"
              value={this.state.ck_coordinate_x}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* coordinate y */}
          <Form.Group className="mb-3" controlId="formCellCoordY">
            <Form.Label>CK Coordinate Y</Form.Label>
            <Form.Control
              type="number"
              name="ck_coordinate_y"
              value={this.state.ck_coordinate_y}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* user */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Assigned User</Form.Label>
            <Form.Select
              aria-label="Cell User"
              name="user_id"
              value={this.state.user_id}
              onChange={this.handleOnChange}
            >
              {this.renderUserOptionItems(this.props.allUsers)}
            </Form.Select>
          </Form.Group>

          {/* region */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Region</Form.Label>
            <Form.Select
              aria-label="Cell Region"
              name="region_id"
              value={this.state.region_id}
              onChange={this.handleOnChange}
            >
              {this.renderOptionItems(this.props.allRegions)}
            </Form.Select>
          </Form.Group>

          {/* worldspace */}
          <Form.Group className="mb-3" controlId="formCellWorldspace">
            <Form.Label>Worldspace</Form.Label>
            <Form.Select
              aria-label="Cell Worldspace"
              name="worldspace_id"
              value={this.state.worldspace_id}
              onChange={this.handleOnChange}
            >
              {this.renderOptionItems(this.props.allWorldspaces)}
            </Form.Select>
          </Form.Group>

          {/* % complete */}
          <Form.Group className="mb-3" controlId="formCellProgress">
            <Form.Label>Progress</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon-1">
                {this.state.percent_complete}%
              </InputGroup.Text>
              <Form.Range
                name="percent_complete"
                value={this.state.percent_complete}
                onChange={this.handleOnChange}
                aria-describedby="basic-addon-1"
              />
            </InputGroup>
          </Form.Group>

          {/* color */}
          <Form.Group className="mb-3" controlId="formCellColor">
            <Form.Label>Cell Display Color</Form.Label>
            <Form.Control
              type="color"
              title="Select a cell display color"
              name="color"
              value={this.state.color}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* create cell submit button */}
          <Button variant="success" type="submit">
            Save Cell
          </Button>
          <Button variant="danger" onClick={() => window.history.back()}>
            Cancel
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // allRegions: state.regions.allRegions,
    // allWorldspaces: state.worldspaces.allWorldspaces,
    // allUsers: state.users.allUsers,
    allCells: state.cells.allCells,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createQuest: (quest) => dispatch(createQuest(quest)),
    editQuest: (quest) => dispatch(editQuest(quest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestForm);
