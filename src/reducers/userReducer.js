/* eslint-disable camelcase */
import { GET_All_USERS, SHOW_ASIDE, HIDE_ASIDE } from '../actions/actionTypes';

const initialState = {
  allUsers: [],
  show: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_All_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case SHOW_ASIDE:
      return {
        ...state,
        show: true,
      };
    case HIDE_ASIDE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
