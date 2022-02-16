import renderErrors from "../helpers/renderErrors";
// import { apiURL } from "./fetchConfig";

// Create quest
export const createQuest = (questObject) => {
  return (dispatch) => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify({ quest: questObject }),
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/quests`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errors) {
          renderErrors(json.errors);
        } else {
          dispatch({ type: "ADD_QUEST", quest: json });
          dispatch({ type: "REDIRECT", url: `/quests/${json.slug}` });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
// Load quest
export const loadQuest = (id) => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/quests/${id}`,
      configurationObject
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_QUEST", quest: json });
      });
  };
};

// Load quests
export const loadQuests = () => {
  return (dispatch) => {
    const configurationObject = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
    };
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/quests`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_QUESTS", quests: json });
      });
  };
};

// edit quest
export const editQuest = (questObject) => {
  return (dispatch) => {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
      },
      body: JSON.stringify({ quest: questObject }),
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/quests/${questObject.id}`,
      configurationObject
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errors) {
          renderErrors(json.errors);
        } else {
          dispatch({ type: "EDIT_QUEST", quest: json });
          dispatch({ type: "REDIRECT", url: `/quests/${json.slug}` });
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };
};
// delete quest
// export const deleteQuest = (questObject) => {
//   return (dispatch) => {
//     const configurationObject = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         Authorization: `Bearer ${localStorage.getItem("cellMateJWT")}`,
//       },
//       body: JSON.stringify(questObject),
//     };
//     fetch(
//       `${process.env.REACT_APP_API_URL}/api/v1/quests/${questObject.quest.id}`,
//       configurationObject
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((json) => {
//         dispatch({ type: "DELETE_QUEST", quest: questObject });
//       })
//       .catch((response) => {
//         console.log(response);
//       });
//   };
// };

// set active quest

// reset active quest
