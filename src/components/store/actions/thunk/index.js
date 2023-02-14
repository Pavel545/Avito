import axios from "axios";
import { BASE_URL } from "../../../constants";
import { allCardGalleri } from "../creators/todo";


export const allCard = () => async (dispatch) => {
    console.log("Loading...");

    try {
      const { data } = await axios.get(`${BASE_URL}/ads`);
      dispatch(allCardGalleri(data));
    } catch (error) {
      console.log(error);
    }
  };