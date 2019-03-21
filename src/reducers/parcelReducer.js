/* eslint-disable camelcase */
import {
  GET_All_USER_ORDERS, GET_CANCELED_USER_ORDERS,
  GET_CREATED_USER_ORDERS, GET_DELIVERED_USER_ORDERS,
  GET_INTRANSIT_USER_ORDERS, IS_LOADING, CREATE_NEW_PARCEL,
  CHANGE_PARCEL_DESTINATION, ERROR
} from '../actions/actionTypes';

const initialState = {
  error: '',
  isLoading: false,
  parcels: [],
  deliveredParcels: [],
  inTransitParcels: [],
  createdParcels: [],
  canceledParcels: [],
  newParcel: [],
  changeDestination: ''
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
    case ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case CHANGE_PARCEL_DESTINATION:
      return {
        ...state,
        isLoading: false,
        changeDestination: action.payload
      };
    default:
      return state;
  }
};
