import axios from "axios";

import {
  allRequestStarted,
  allCardSuccess,
  allRequestFailure,
  certainCardSuccess,
} from "../creators/todo";

const BASE_URL = "http://localhost:8090";

export const allCard = () => async (dispatch) => {
  dispatch(allRequestStarted());

  try {
    const { data } = await axios.get(`${BASE_URL}/ads`);

    dispatch(allCardSuccess(data));
  } catch (error) {
    dispatch(allRequestFailure(error));
  }
};
export const dataPages =
  ({ id }) =>
  async (dispatch) => {
    dispatch(allRequestStarted());

    try {
      const { data } = await axios.get(
        `${BASE_URL}/ads/${id}`
      );

      dispatch(certainCardSuccess(data));
    } catch (error) {
      dispatch(allRequestFailure(error));
    }
  };
// export const allAuthor = () => async (dispatch) => {
//   dispatch(allTodosStarted());

//   try {
//     const { data } = await axios.get(`${BASE_URL}/authors`);

//     dispatch(allAuthorSuccess(data));
//   } catch (error) {
//     dispatch(allTodosFailure(error));
//   }
// };
// export const allLocations = () => async (dispatch) => {
//   dispatch(allTodosStarted());

//   try {
//     const { data } = await axios.get(`${BASE_URL}/locations`);

//     dispatch(allLocationSuccess(data));
//   } catch (error) {
//     dispatch(allTodosFailure(error));
//   }
// };
// export const dataFilter =
//   ({ filter }) =>
//   async (dispatch) => {
//     dispatch(allTodosStarted());

//     try {
//       const { data } = await axios.get(`${BASE_URL}/paintings?q=${filter}`);

//       dispatch(pagesTodosSuccess(data));
//       dispatch(allTodosSuccess(data));
//     } catch (error) {
//       dispatch(allTodosFailure(error));
//     }
//   };
// export const filterAuthor =
//   ({ filter }) =>
//   async (dispatch) => {
//     dispatch(allTodosStarted());

//     try {
//       const { data } = await axios.get(
//         `${BASE_URL}/paintings?authorId=${filter}`
//       );

//       dispatch(pagesTodosSuccess(data));
//       dispatch(allTodosSuccess(data));
//     } catch (error) {
//       dispatch(allTodosFailure(error));
//     }
//   };
// export const filterLocations =
//   ({ gte, lte }) =>
//   async (dispatch) => {
//     dispatch(allTodosStarted());

//     try {
//       const { data } = await axios.get(
//         `${BASE_URL}/paintings?_gte=${gte}&_lte=${lte}`
//       );

//       dispatch(pagesTodosSuccess(data));
//       dispatch(allTodosSuccess(data));
//     } catch (error) {
//       dispatch(allTodosFailure(error));
//     }
//   };
// export const filterCreated =
//   ({ filter }) =>
//   async (dispatch) => {
//     dispatch(allTodosStarted());

//     try {
//       const { data } = await axios.get(
//         `${BASE_URL}/paintings?locationId=${filter}`
//       );

//       dispatch(pagesTodosSuccess(data));
//       dispatch(allTodosSuccess(data));
//     } catch (error) {
//       dispatch(allTodosFailure(error));
//     }
//   };
