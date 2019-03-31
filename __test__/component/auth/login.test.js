import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Login } from '../../../src/components/auth/login.jsx';
import { LoginForm } from '../../../src/components/forms/loginForm.jsx';

const initialState = {
  auth: {
    isLoading: false
  }
};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
const onChange = jest.fn();


describe('Login Page component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <Login />
        </Provider>
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


// describe('Login subscribe form', () => {
//   it('should change state', () => {
//     const wrapper = shallow(<MemoryRouter>
//       <LoginForm />
//     </MemoryRouter>);
//     const input = wrapper.find('#email').dive().instance();
//     console.log(loginForm);
//     // const input = loginForm.find('#email');
//     console.log(input.debug(), 'login===');
//     input.simulate('change', {
//       target: { value: 'yinks@gmail.com' }
//     });
//     // input.instance().value = 'yinks@gmail.com';
//     // input.simulate('change');
//     console.log(loginForm, input.length, loginForm.state());
//     expect(loginForm.state().email).toEqual('yinks@gmail.com');
//   });
// });
