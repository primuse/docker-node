import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { TopNav } from '../../../src/components/navs/topNav.jsx';


describe('Top Nav component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter><TopNav /></MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
