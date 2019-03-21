/* eslint-disable camelcase */
import {
  GET_All_USER_ORDERS, GET_CANCELED_USER_ORDERS,
  GET_CREATED_USER_ORDERS, GET_DELIVERED_USER_ORDERS,
  GET_INTRANSIT_USER_ORDERS, IS_LOADING, CREATE_NEW_PARCEL
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  parcels: [],
  deliveredParcels: [],
  inTransitParcels: [],
  createdParcels: [],
  canceledParcels: [],
  newParcel: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_All_USER_ORDERS:
      return {
        ...state,
        isLoading: false,
        parcels: action.payload,
      };
    case GET_DELIVERED_USER_ORDERS:
      return {
        ...state,
        isLoading: false,
        deliveredParcels: action.payload,
      };
    case GET_INTRANSIT_USER_ORDERS:
      return {
        ...state,
        isLoading: false,
        inTransitParcels: action.payload,
      };
    case GET_CREATED_USER_ORDERS:
      return {
        ...state,
        isLoading: false,
        createdParcels: action.payload,
      };
    case GET_CANCELED_USER_ORDERS:
      return {
        ...state,
        isLoading: false,
        canceledParcels: action.payload,
      };
    case CREATE_NEW_PARCEL:
      return {
        ...state,
        isLoading: false,
        newParcel: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
