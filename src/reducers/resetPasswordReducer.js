import {
  SEND_RESET_EMAIL, SEND_RESET_EMAIL_ERROR, PASSWORD_IS_LOADING
} from '../actions/actionTypes';

const initialState = {
  emailSent: '',
  error: '',
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_RESET_EMAIL:
      return {
        ...state,
        isLoading: false,
        emailSent: action.payload,
      };
    case PASSWORD_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case SEND_RESET_EMAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
