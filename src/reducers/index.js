import { combineReducers } from 'redux';
import authReducer from './authReducer';
import parcelReducer from './parcelReducer';
import userReducer from './userReducer';


export default combineReducers({
  auth: authReducer,
  parcel: parcelReducer,
  users: userReducer,
});
