import * as actionsTypes from "./types";

// USER ACTIONS

export const setUser = user => {
  return {
    type: actionsTypes.SET_USER,
    payload: {
      currentUser: user
    }
  };
};

export const clearUser = () => {
  return {
    type: actionsTypes.CLEAR_USER
  };
};

// CHANNEL ACTIONS

export const setCurrentChannel = channel => {
  return {
    type: actionsTypes.SET_CURRENT_CHANNEL,
    payLoad: {
      currentChannel: channel
    }
  };
};
