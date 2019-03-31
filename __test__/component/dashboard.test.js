import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Dashboard from '../../src/components/dashboard.jsx';

global.Headers = () => {};

const initialState1 = {
  auth: {
    isAuthenticated: true,
    user: {
      isadmin: false,
      firstName: 'Tiku',
      lastName: 'Okoye',
      registered: '22-03-2019',
      email: 'cim@gmail.com'
    },
  },
  users: {
    allUsers: [],
    show: false
  },
  parcel: {
    parcels: [
      {
        id: 1,
        parcelName: 'rice',
        weigth: '30',
        price: '4,000',
        destination: 'Owerri',
        receiver: 'Tiku Okoye',
        senton: '22-03-2019',
        status: 'created'
      },
      {
        id: 2,
        parcelName: 'rice',
        weigth: '30',
        price: '4,000',
        destination: 'Owerri',
        receiver: 'Tiku Okoye',
        senton: '22-03-2019',
        status: 'created'
      }
    ],
    createdParcels: [],
    deliveredParcels: [],
    inTransitParcels: [],
    canceledParcels: [],
    pages: 2
  }
};

const initialState2 = {
  auth: {
    isAuthenticated: true,
    user: {
      isadmin: true,
      firstName: 'Tiku',
      lastName: 'Okoye',
      registered: '22-03-2019',
      email: 'cim@gmail.com'
    },
  },
  users: {
    allUsers: [],
    show: false
  },
  parcel: {
    parcels: [
      {
        id: 1,
        parcelName: 'rice',
        weigth: '30',
        price: '4,000',
        destination: 'Owerri',
        receiver: 'Tiku Okoye',
        senton: '22-03-2019',
        status: 'created'
      },
      {
        id: 2,
        parcelName: 'rice',
        weigth: '30',
        price: '4,000',
        destination: 'Owerri',
        receiver: 'Tiku Okoye',
        senton: '22-03-2019',
        status: 'created'
      }
    ],
    createdParcels: [],
    deliveredParcels: [],
    inTransitParcels: [],
    canceledParcels: [],
    pages: 2
  }
};

const mockStore = configureStore([thunk]);


describe('All user parcels component', () => {
  const store = mockStore(initialState1);
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('All parcels component', () => {
  const store = mockStore(initialState2);
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
