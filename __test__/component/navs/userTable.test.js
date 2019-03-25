import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { UserTable } from '../../../src/components/navs/userTable.jsx';

const users = [
  {
    id: '1',
    firstName: 'Tiku',
    lastName: 'Okoye',
    isAdmin: 'false',
    email: 'cim@gmail.com',
    registered: '22-03-2019',
  },
  {
    id: '1',
    firstName: 'Tiku',
    lastName: 'Okoye',
    isAdmin: 'false',
    email: 'cim@gmail.com',
    registered: '22-03-2019',
  }
];

describe('IUser Parcel Table component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <UserTable allUsers={users} />
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
