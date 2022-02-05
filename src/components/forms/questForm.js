import React, { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createQuest, editQuest } from "../../actions/questActions";
import QuestCellsTable from "../quests/questCellsTable";
import LoadingSpinner from "../../components/general/loadingSpinner";

// import randomColorGenerator from "../../helpers/randomColorGenerator";

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

  renderCellTable = () => {
    if (this.props.allCells) {
      return <QuestCellsTable cells={this.props.allCells} />;
    } else {
      return <LoadingSpinner />;
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

          {/* details */}
          {/* TODO: set the size for this */}
          <Form.Group className="mb-3" controlId="formQuestDetails">
            <Form.Label>Details</Form.Label>
            <Form.Control
              // type="textarea"
              placeholder="Enter quest details"
              as="textarea"
              name="details"
              value={this.state.details}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* category */}
          <Form.Group className="mb-3" controlId="formCellPriority">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Quest Category"
              name="category"
              value={this.state.category}
              onChange={this.handleOnChange}
            >
              <option value="Main">Main</option>
              <option value="Side">Side</option>
              <option value="Fetch">Fetch</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          {/* wiki link */}
          <Form.Group className="mb-3" controlId="formQuestWikiLink">
            <Form.Label>Wiki Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter quest wiki url"
              name="wiki_link"
              value={this.state.wiki_link}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          {/* TODO: Cell list here with selection box */}
          {/* <QuestCellsTable cells={this.props.allCells} /> */}
          {this.renderCellTable()}

          {/* submit & cancel button */}
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
