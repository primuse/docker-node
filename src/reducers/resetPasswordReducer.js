import {
  SEND_RESET_EMAIL, SEND_RESET_EMAIL_ERROR
} from '../actions/actionTypes';

const initialState = {
  emailSent: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_RESET_EMAIL:
      return {
        ...state,
        emailSent: action.payload,
      };
    case SEND_RESET_EMAIL_ERROR:
      return {
        ...state,
        emailSent: action.payload,
      };
    default:
      return state;
  }
};
