const initialState = {
  allUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_All_USERS':
      return {
        ...state,
        allUsers: action.payload,
      };
    default:
      return state;
  }
};
