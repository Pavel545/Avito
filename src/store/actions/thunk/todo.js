import axios from "axios";

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
export const certainCard = ({id}) => async (dispatch) => {
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
export const UserToken = ({logPas}) => async (dispatch) => {
  dispatch(userRequestStarted());

  try {
    const { data } = await axios({
      method: 'post',
      url:`${BASE_URL}/auth/login`,
      logPas,
    });

    dispatch(userRequestSuccess(data));
  } catch (error) {
    dispatch(userRequestFailure(error));
  }
};
export const UserRegister = ({logPas}) => async (dispatch) => {
  dispatch(userRequestStarted());
  try {
    const { data } = await axios.post(
    `${BASE_URL}/auth/register`,
    JSON.stringify(logPas),
    {
      headers:{
        "Content-Type":"application/json"
      }
    }
  )
    console.log(data);
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