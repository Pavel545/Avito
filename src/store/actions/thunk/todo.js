import axios from "axios";
import { BASE_URL } from "../../../constants";

import {
  allRequestStarted,
  allCardSuccess,
  allRequestFailure,
  certainCardSuccess,
  allSellerSuccess,
  userRequestFailure,
  userRegisterSuccess,
  userTokensSuccess,
  userPatchSuccess,
  allComments,
} from "../creators/todo";



export const allCard = () => async (dispatch) => {
  dispatch(allRequestStarted());

  try {
    const { data } = await axios.get(`${BASE_URL}/ads`);

    dispatch(allCardSuccess(data));
  } catch (error) {
    dispatch(allRequestFailure(error));
  }
};
export const certainCard =
  ({ id }) =>
  async (dispatch) => {
    dispatch(allRequestStarted());

    try {
      const { data } = await axios.get(`${BASE_URL}/ads/${id}`);

      dispatch(certainCardSuccess(data));
    } catch (error) {
      dispatch(allRequestFailure(error));
    }
  };
export const allSeller = () => async (dispatch) => {
  dispatch(allRequestStarted());

  try {
    const { data } = await axios.get(`${BASE_URL}/user/all`);

    dispatch(allSellerSuccess(data));
  } catch (error) {
    dispatch(allRequestFailure(error));
  }
};

export const UserRegister = (logPas) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, logPas, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(userRegisterSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};
export const UserLoginin = (access_token) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    dispatch(userRegisterSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};
export const UserPatch = ({element,access_token}) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/user`,element ,{
      headers: { Authorization: `Bearer ${access_token}` },
    });
    dispatch(userPatchSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};
export const ArticleCreate = ({obj,access_token}) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/adstext`, obj, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    dispatch(userPatchSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};
export const ArticleDelete = ({id,access_token}) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/ads/${id}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    dispatch(userPatchSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};
export const ArticlePatch = ({access_token,id,obj}) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/ads/${id}`,obj, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    dispatch(userPatchSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};
export const ArticleComments = ({id}) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/ads/${id}/comments`);
    dispatch(allComments(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};