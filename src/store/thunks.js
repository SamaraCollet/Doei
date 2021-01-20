import { setAllCampaigns } from "./ducks/campaigns";
import { setAllUsers } from "./ducks/users";
import axios from "axios";

const url = "https://capstone4-kenzie.herokuapp.com";

export const getAllCampaigns = () => (dispatch) => {
  axios
    .get(`${url}/campaigns`)
    .then((response) => {
      // console.log(response);
      dispatch(setAllCampaigns(response.data));
    })
    .catch((err) => console.log(err));
};

export const getAllUsers = () => (dispatch) => {
  axios
    .get(`${url}/users`)
    .then((res) => {
      // console.log(res);
      dispatch(setAllUsers(res));
    })
    .catch((err) => console.log(err));
};
