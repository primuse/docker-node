import {
  GET_All_USER_ORDERS, GET_CANCELED_USER_ORDERS,
  GET_CREATED_USER_ORDERS, GET_DELIVERED_USER_ORDERS,
  GET_INTRANSIT_USER_ORDERS, PARCEL_IS_LOADING, CREATE_NEW_PARCEL,
  SET_PAGES
} from '../../src/actions/actionTypes';
import reducer from '../../src/reducers/parcelReducer';

const parcel = {
  id: '1',
  parcelName: 'rice',
  weigth: '30',
  price: '4,000',
  destination: 'Owerri',
  receiver: 'Tiku Okoye',
  senton: '22-03-2019',
  status: 'created'
};


describe('parcel reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      parcels: [],
      deliveredParcels: [],
      inTransitParcels: [],
      createdParcels: [],
      canceledParcels: [],
      newParcel: [],
      pages: null
    });
  });
  it('should get all user orders', () => {
    const successAction = {
      type: GET_All_USER_ORDERS,
      payload: parcel,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isLoading: false,
        parcels: parcel,
      });
  });
  it('should get delivered user orders', () => {
    const successAction = {
      type: GET_DELIVERED_USER_ORDERS,
      payload: parcel,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isLoading: false,
        deliveredParcels: parcel,
      });
  });
  it('should get in-transit user orders', () => {
    const successAction = {
      type: GET_INTRANSIT_USER_ORDERS,
      payload: parcel,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isLoading: false,
        inTransitParcels: parcel,
      });
  });
  it('should get created user orders', () => {
    const successAction = {
      type: GET_CREATED_USER_ORDERS,
      payload: parcel,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isLoading: false,
        createdParcels: parcel,
      });
  });
  it('should get canceled user orders', () => {
    const successAction = {
      type: GET_CANCELED_USER_ORDERS,
      payload: parcel,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isLoading: false,
        canceledParcels: parcel,
      });
  });
  it('should create new orders', () => {
    const successAction = {
      type: CREATE_NEW_PARCEL,
      payload: parcel,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isLoading: false,
        newParcel: parcel,
      });
  });
  it('should show that it\'s loading', () => {
    const loadingAction = {
      type: PARCEL_IS_LOADING,

    };
    expect(reducer({}, loadingAction))
      .toEqual({
        isLoading: true,
      });
  });
  it('should set the number of pages for pagination', () => {
    const paginationAction = {
      type: SET_PAGES,
      payload: 2
    };
    expect(reducer({}, paginationAction))
      .toEqual({
        pages: 2,
        isLoading: false
      });
  });
});
