import hasToken from '../helpers/validator';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isAuthenticated: hasToken(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};
