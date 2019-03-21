import hasID from '../helpers/validator';
import {
  LOGIN_USER, LOGIN_ERROR, SIGNUP_ERROR, SIGNUP_USER
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isAuthenticated: hasID(action.payload),
        user: action.payload,
      };
    case SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: hasID(action.payload),
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      };
    default:
      return state;
  }
};
