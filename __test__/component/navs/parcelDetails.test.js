import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { ParcelDetails } from '../../../src/components/navs/parcelDetails.jsx';

const props = {
  parcel: [
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
  user: {
    firstName: 'Tiku',
    lastName: 'Okoye',
    registered: '22-03-2019',
    email: 'cim@gmail.com'
  }
};

describe('Login Page component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ParcelDetails {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
