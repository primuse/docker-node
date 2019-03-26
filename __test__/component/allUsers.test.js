import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AllUsers from '../../src/components/allUsers.jsx';

const initialState = {
  auth: {
    isAuthenticated: true,
    user: {
      firstName: 'Tiku',
      lastName: 'Okoye',
      registered: '22-03-2019',
      email: 'cim@gmail.com'
    },
  },
  users: {
    allUsers: [
      {
        id: '1',
        firstName: 'Tiku',
        lastName: 'Okoye',
        isadmin: 'false',
        email: 'cim@gmail.com',
        registered: '22-03-2019',
      },
      {
        id: '1',
        firstName: 'Tiku',
        lastName: 'Okoye',
        isadmin: 'false',
        email: 'cim@gmail.com',
        registered: '22-03-2019',
      }
    ]
  },
  show: false
};

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);


describe('All users component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <AllUsers />
        </Provider>
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
