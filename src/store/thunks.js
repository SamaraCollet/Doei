import { setAllCampaigns } from "./ducks/campaigns";
import axios from "axios";

export const getAllCampaigns = () => (dispatch) => {
  axios
    .get("https://capstone4-kenzie.herokuapp.com/campaigns")
    .then((response) => {
      console.log(response);
      dispatch(setAllCampaigns(response.data));
    })
    .catch((err) => console.log(err));
};
