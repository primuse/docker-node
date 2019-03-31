import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Modal from '../../src/components/modal.jsx';

global.Headers = () => { };

const initialState = {};
const mockStore = configureStore([thunk]);
const store = mockStore(initialState);

const form = () => <div></div>;


describe('All users component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Provider store={store}>
          <Modal modalTitle={'New Parcel'} ModalForm={form} />
        </Provider>
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
