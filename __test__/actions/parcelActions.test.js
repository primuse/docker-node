import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {
  GET_DELIVERED_USER_ORDERS, GET_INTRANSIT_USER_ORDERS, GET_CANCELED_USER_ORDERS,
  GET_CREATED_USER_ORDERS, GET_All_USER_ORDERS, PARCEL_IS_LOADING, CREATE_NEW_PARCEL, ERROR,
  SET_PAGES
} from '../../src/actions/actionTypes';
import {
  getAllParcels, getUserParcels, createNewParcel
} from '../../src/actions/parcelActions';

const res = {
  data: [
    {
      id: 1,
      parcelName: 'rice',
      weigth: '30',
      price: '4,000',
      destination: 'Owerri',
      receiver: 'Tiku Okoye',
      senton: '22-03-2019',
      status: 'Delivered'
    },
    {
      id: 2,
      parcelName: 'rice',
      weigth: '30',
      price: '4,000',
      destination: 'Owerri',
      receiver: 'Tiku Okoye',
      senton: '22-03-2019',
      status: 'Created'
    },
    {
      id: 3,
      parcelName: 'rice',
      weigth: '30',
      price: '4,000',
      destination: 'Owerri',
      receiver: 'Tiku Okoye',
      senton: '22-03-2019',
      status: 'Canceled'
    },
    {
      id: 4,
      parcelName: 'rice',
      weigth: '30',
      price: '4,000',
      destination: 'Owerri',
      receiver: 'Tiku Okoye',
      senton: '22-03-2019',
      status: 'In-transit'
    }
  ],
  pages: 2
};

const errorRes = {
  message: 'Internal server error'
};


describe('Get user\'s parcel', () => {
  const parcels = Object.values(res.data),
    deliveredParcels = parcels.filter(parcel => parcel.status === 'Delivered'),
    inTransitParcels = parcels.filter(parcel => parcel.status === 'In-transit'),
    createdParcels = parcels.filter(parcel => parcel.status === 'Created'),
    canceledParcels = parcels.filter(parcel => parcel.status === 'Canceled');

  it('dispatches the correct actions on successful fetch request', (done) => {
    fetch.mockResponse(JSON.stringify(res));

    const expectedActions = [
      { type: PARCEL_IS_LOADING },
      { type: GET_DELIVERED_USER_ORDERS, payload: deliveredParcels },
      { type: GET_INTRANSIT_USER_ORDERS, payload: inTransitParcels },
      { type: GET_CREATED_USER_ORDERS, payload: createdParcels },
      { type: GET_CANCELED_USER_ORDERS, payload: canceledParcels },
      { type: GET_All_USER_ORDERS, payload: parcels },
      { type: SET_PAGES, payload: res.pages }
    ];
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      isLoading: false,
      parcels: [],
      deliveredParcels: [],
      inTransitParcels: [],
      createdParcels: [],
      canceledParcels: [],
      newParcel: []
    }, expectedActions, done);

    store.dispatch(getUserParcels(res))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('dispatches the correct actions on unsuccessful fetch request', (done) => {
    fetch.mockReject(new Error(errorRes.message));

    const expectedActions = [
      { type: PARCEL_IS_LOADING },
      { type: ERROR, payload: errorRes.message }
    ];
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      isLoading: false,
      parcels: [],
      deliveredParcels: [],
      inTransitParcels: [],
      createdParcels: [],
      canceledParcels: [],
      newParcel: []
    }, expectedActions, done);
    store.dispatch(getUserParcels(errorRes))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});

describe('Get all parcels', () => {
  const parcels = Object.values(res.data),
    deliveredParcels = parcels.filter(parcel => parcel.status === 'Delivered'),
    inTransitParcels = parcels.filter(parcel => parcel.status === 'In-transit'),
    createdParcels = parcels.filter(parcel => parcel.status === 'Created'),
    canceledParcels = parcels.filter(parcel => parcel.status === 'Canceled');

  it('dispatches the correct actions on successful fetch request', (done) => {
    fetch.mockResponse(JSON.stringify(res));

    const expectedActions = [
      { type: PARCEL_IS_LOADING },
      { type: GET_DELIVERED_USER_ORDERS, payload: deliveredParcels },
      { type: GET_INTRANSIT_USER_ORDERS, payload: inTransitParcels },
      { type: GET_CREATED_USER_ORDERS, payload: createdParcels },
      { type: GET_CANCELED_USER_ORDERS, payload: canceledParcels },
      { type: GET_All_USER_ORDERS, payload: parcels },
      { type: SET_PAGES, payload: res.pages }
    ];
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      isLoading: false,
      parcels: [],
      deliveredParcels: [],
      inTransitParcels: [],
      createdParcels: [],
      canceledParcels: [],
      newParcel: []
    }, expectedActions, done);

    store.dispatch(getAllParcels(res))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('dispatches the correct actions on unsuccessful fetch request', (done) => {
    fetch.mockReject(new Error(errorRes.message));

    const expectedActions = [
      { type: PARCEL_IS_LOADING },
      { type: ERROR, payload: errorRes.message }
    ];
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      isLoading: false,
      parcels: [],
      deliveredParcels: [],
      inTransitParcels: [],
      createdParcels: [],
      canceledParcels: [],
      newParcel: []
    }, expectedActions, done);
    store.dispatch(getAllParcels(errorRes))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});

describe('Create a new parcel', () => {
  const parcelRes = {
    rows: {
      id: 1,
      parcelName: 'rice',
      weigth: '30',
      price: '4,000',
      destination: 'Owerri',
      receiver: 'Tiku Okoye',
      senton: '22-03-2019',
      status: 'Delivered'
    },
  };

  const parcel = parcelRes.rows;

  it('dispatches the correct actions on successful fetch request', (done) => {
    fetch.mockResponse(JSON.stringify(parcelRes));

    const expectedActions = [
      { type: PARCEL_IS_LOADING },
      { type: CREATE_NEW_PARCEL, payload: parcel },
    ];
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      isLoading: false,
      parcels: [],
      deliveredParcels: [],
      inTransitParcels: [],
      createdParcels: [],
      canceledParcels: [],
      newParcel: []
    }, expectedActions, done);

    store.dispatch(createNewParcel(res))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
  it('dispatches the correct actions on unsuccessful fetch request', (done) => {
    fetch.mockReject(new Error(errorRes.message));

    const expectedActions = [
      { type: PARCEL_IS_LOADING },
      { type: ERROR, payload: errorRes.message }
    ];
    const mockStore = configureStore([thunk]);
    const store = mockStore({
      isLoading: false,
      parcels: [],
      deliveredParcels: [],
      inTransitParcels: [],
      createdParcels: [],
      canceledParcels: [],
      newParcel: []
    }, expectedActions, done);
    store.dispatch(createNewParcel(errorRes))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});
