import { setAllCampaigns } from "./ducks/campaigns";
import { setCurrentUser } from "./ducks/user";
import axios from "axios";

const url = "https://capstone4-kenzie.herokuapp.com";

export const getAllCampaigns = () => (dispatch) => {
  axios
    .get(`${url}/campaigns`)
    .then((response) => {
      dispatch(setAllCampaigns(response.data));
    })
    .catch((err) => console.log(err));
};

export const getCurrentUser = (id) => (dispatch) => {
  id !== ""
    ? axios
        .get(`${url}/users/${id}`)
        .then((res) => {
          localStorage.setItem("isOng", res.data.ngo);
          dispatch(setCurrentUser(res));
        })
        .catch((err) => console.log(err))
    : dispatch(setCurrentUser(""));
};
