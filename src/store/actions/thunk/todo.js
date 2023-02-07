import axios from "axios";
import { TOKEN } from "../../../constants";

import {
  allRequestStarted,
  allCardSuccess,
  allRequestFailure,
  certainCardSuccess,
  allSellerSuccess,
  userRequestFailure,
  userRequestStarted,
  userRequestSuccess,
  userRegisterSuccess,
  userTokensSuccess,
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
export const UserToken = (logPas) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, logPas, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(userTokensSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
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

// data:{
//   password: logPas.password,
//   role: logPas.role,
//   email: logPas.email,
//   name: logPas.name,
//   surname: logPas.surname,
//   phone: logPas.phone,
//   city: logPas.city,
// },
