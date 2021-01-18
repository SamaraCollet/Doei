// Action Types

export const Types = {
  ALL_CAMPAIGNS: "campaings/ALL_CAMPAIGNS",
};

// Reducer

const campaignsReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ALL_CAMPAIGNS:
      return action.payload;
    default:
      return state;
  }
};

export default campaignsReducer;

// Action Creators

export const setAllCampaigns = (campaigns) => {
  return {
    type: Types.ALL_CAMPAIGNS,
    payload: campaigns,
  };
};
