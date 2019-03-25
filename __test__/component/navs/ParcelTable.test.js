import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import {
  ParcelTable, DeliveredParcelTable, InTransitParcelTable
} from '../../../src/components/navs/table.jsx';

const parcels = [
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
];


describe('Parcel Table component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <ParcelTable parcels={parcels} />
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Delivered Parcel Table component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <DeliveredParcelTable parcels={parcels} />
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('In-Transit Parcel Table component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <InTransitParcelTable parcels={parcels} />
      </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
