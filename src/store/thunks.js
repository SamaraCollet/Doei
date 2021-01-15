import { setAllCampaigns } from "./ducks/campaigns";
import axios from "axios";

export const getAllCampaigns = () => (dispatch) => {
  axios
    .get("https://capstone4-kenzie.herokuapp.com/campaigns")
    .then((response) => {
      dispatch(setAllCampaigns(response.data));
    });
};
