import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TopNav from '../../../src/components/navs/topNav.jsx';

const initialState = {
  auth: {
    isAuthenticated: true,
    user: {
      firstName: 'Tiku',
      lastName: 'Okoye',
      isadmin: false
    },
  },
  users: {
    allUsers: [],
    show: false
  }
};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

describe('Top Nav component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <TopNav />
        </Provider>
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
