import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ConnectedResetForm, { ResetForm }
  from '../../src/components/forms/resetForm.jsx';

const onChange = jest.fn();
const resetPassword = jest.fn();
const initialState = {};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
let wrapper;

describe('Reset Password form', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Provider store={store}>
        <ConnectedResetForm />
      </Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Reset password form', () => {
  beforeEach(() => {
    wrapper = mount(<ResetForm
      onChange={onChange} resetPassword={resetPassword} />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
  it('should change state', () => {
    const input = wrapper.find('#email');
    input.instance().value = 'yinks@gmail.com';
    input.simulate('change');
    expect(wrapper.state().email).toEqual('yinks@gmail.com');
  });
  it('should simulate the onSubmit', () => {
    wrapper.find('form').simulate('submit');
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: 'cim@gmail.com' } });
    expect(resetPassword).toHaveBeenCalled();
  });
});
