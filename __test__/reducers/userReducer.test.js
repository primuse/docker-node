import {
  GET_All_USERS
} from '../../src/actions/actionTypes';
import reducer from '../../src/reducers/userReducer';

const allUsers = [
  {
    firstName: 'Tiku',
    lastName: 'Okoye',
    isAdmin: false,
    id: 1
  },
  {
    firstName: 'Tiku',
    lastName: 'Okoye',
    isAdmin: false,
    id: 1
  },
  {
    firstName: 'Tiku',
    lastName: 'Okoye',
    isAdmin: false,
    id: 1
  }
];

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      allUsers: []
    });
  });
  it('should get all users', () => {
    const successAction = {
      type: GET_All_USERS,
      payload: allUsers,
    };
    expect(reducer({}, successAction))
      .toEqual({
        allUsers
      });
  });
});
