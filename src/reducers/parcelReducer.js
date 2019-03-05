const initialState = {
  parcels: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_ORDERS':
      return {
        ...state,
        parcels: action.payload,
      };
    default:
      return state;
  }
};
