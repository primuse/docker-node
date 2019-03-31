import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Signup } from '../../../src/components/auth/login.jsx';
import LoginForm from '../../../src/components/forms/loginForm.jsx';

const initialState = {
  auth: {
    isLoading: false
  }
};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);


describe('Login page component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
