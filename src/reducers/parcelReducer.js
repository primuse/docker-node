const initialState = {
  parcels: [],
  deliveredParcels: [],
  inTransitParcels: [],
  createdParcels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_All_USER_ORDERS':
      return {
        ...state,
        parcels: action.payload,
      };
    case 'GET_DELIVERED_USER_ORDERS':
      return {
        ...state,
        deliveredParcels: action.payload,
      };
    case 'GET_INTRANSIT_USER_ORDERS':
      return {
        ...state,
        inTransitParcels: action.payload,
      };
    case 'GET_CREATED_USER_ORDERS':
      return {
        ...state,
        createdParcels: action.payload,
      };
    default:
      return state;
  }
};
