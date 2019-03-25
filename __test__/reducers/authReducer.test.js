import {
  LOGIN_USER, LOGIN_ERROR, SIGNUP_ERROR, SIGNUP_USER
} from '../../src/actions/actionTypes';
import reducer from '../../src/reducers/authReducer';

const user = {
  firstName: 'Tiku',
  lastName: 'Okoye',
  isAdmin: false,
  id: 1
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isAuthenticated: false,
      user: {},
      error: ''
    });
  });
  it('should login user', () => {
    const successAction = {
      type: LOGIN_USER,
      payload: user,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isAuthenticated: true,
        user
      });
  });
  it('should signup user', () => {
    const successAction = {
      type: SIGNUP_USER,
      payload: user,
    };
    expect(reducer({}, successAction))
      .toEqual({
        isAuthenticated: true,
        user
      });
  });
  it('should return login error', () => {
    const errorAction = {
      type: LOGIN_ERROR,
      payload: 'No Network',
    };
    expect(reducer({}, errorAction))
      .toEqual({
        isAuthenticated: false,
        error: 'No Network'
      });
  });
  it('should return an error', () => {
    const errorAction = {
      type: SIGNUP_ERROR,
      payload: 'No Network',
    };
    expect(reducer({}, errorAction))
      .toEqual({
        isAuthenticated: false,
        error: 'No Network'
      });
  });
});
