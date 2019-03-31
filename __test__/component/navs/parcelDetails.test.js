import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ParcelDetails from '../../../src/components/navs/parcelDetails.jsx';

const props = {
  parcel: {
    parcels: [
      {
        id: '1',
        parcelName: 'rice',
        weigth: '30',
        price: '4,000',
        destination: 'Owerri',
        receiver: 'Tiku Okoye',
        senton: '22-03-2019',
        status: 'created'
      },
      {
        id: '1',
        parcelName: 'rice',
        weigth: '30',
        price: '4,000',
        destination: 'Owerri',
        receiver: 'Tiku Okoye',
        senton: '22-03-2019',
        status: 'created'
      }
    ],
    userParcel: {
      id: 2,
      parcelName: 'rice',
      weigth: '30',
      price: '4,000',
      destination: 'Owerri',
      receiver: 'Tiku Okoye',
      senton: '22-03-2019',
      status: 'created'
    }
  },
  user: {
    firstName: 'Tiku',
    lastName: 'Okoye',
    registered: '22-03-2019',
    email: 'cim@gmail.com',
    isadmin: false
  }
};

const mockStore = configureStore([thunk]);
const store = mockStore(props);


describe('Parcel Details component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}><ParcelDetails user={props.user }/></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Parcel Details component', () => {
  let parcelDetails;
  beforeEach(() => {
    parcelDetails = mount(<Provider store={store}>
      <ParcelDetails user={props.user} />
      </Provider>);
  });
  afterEach(() => {
    parcelDetails.unmount();
  });
  it('renders the ParcelDetails', () => {
    const h6 = parcelDetails.find('h6');
    expect(h6.length).toEqual(10);
    expect(parcelDetails.find('#parcel')).toBeDefined();
  });
  it('opens the modal', () => {
    const aTag = parcelDetails.find('a').at(0);
    aTag.simulate('click');
  });
});
