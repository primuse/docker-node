import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Profile from '../../../src/components/navs/profile.jsx';

const user = {
  firstName: 'Tiku',
  lastName: 'Okoye',
  registered: '22-03-2019',
  email: 'cim@gmail.com'
};

const parcel = {
  createdParcels: [],
  deliveredParcels: [],
  inTransitParcels: [],
  canceledParcels: []
};


describe('Login Page component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Profile user={user} parcel={parcel} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
