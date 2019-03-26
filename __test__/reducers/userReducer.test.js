import {
  GET_All_USERS, SHOW_ASIDE, HIDE_ASIDE
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
      allUsers: [],
      show: false
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
  it('should show the aside nav', () => {
    const successAction = {
      type: SHOW_ASIDE,
    };
    expect(reducer({}, successAction))
      .toEqual({
        show: true
      });
  });
  it('should hide the aside nav', () => {
    const successAction = {
      type: HIDE_ASIDE,
    };
    expect(reducer({}, successAction))
      .toEqual({
        show: false
      });
  });
});
