import Swal from 'sweetalert2';
import handleErrors from '../helpers/errorHelper';
import {
  GET_DELIVERED_USER_ORDERS, GET_INTRANSIT_USER_ORDERS, GET_CANCELED_USER_ORDERS,
  GET_CREATED_USER_ORDERS, GET_All_USER_ORDERS, IS_LOADING, CREATE_NEW_PARCEL, ERROR
} from './actionTypes';


export const getUserParcels = (userId, offset = 0) => (dispatch) => {
  const token = localStorage.getItem('token'), config = {
    method: 'GET',
    headers: new Headers({
      'x-access-token': token
    }),
  };
  fetch(
    `https://sendit2019.herokuapp.com/api/v1/users/${userId}/parcels?offset=${offset}`,
    config
  )
    .then(handleErrors)
    .then((res) => {
      const parcels = Object.values(res.data),
        deliveredParcels = parcels.filter(parcel => parcel.status === 'Delivered'),
        inTransitParcels = parcels.filter(parcel => parcel.status === 'In-transit'),
        createdParcels = parcels.filter(parcel => parcel.status === 'Created'),
        canceledParcels = parcels.filter(parcel => parcel.status === 'Canceled');

      dispatch({ type: GET_DELIVERED_USER_ORDERS, payload: deliveredParcels });
      dispatch({ type: GET_INTRANSIT_USER_ORDERS, payload: inTransitParcels });
      dispatch({ type: GET_CREATED_USER_ORDERS, payload: createdParcels });
      dispatch({ type: GET_CANCELED_USER_ORDERS, payload: canceledParcels });
      dispatch({ type: GET_All_USER_ORDERS, payload: parcels });
    })
    .catch((err) => {
      if (err.json) {
        err.json().then((obj) => {
          Swal.fire({
            title: 'Error!',
            text: obj.message,
            type: 'error',
            timer: 3000,
            showConfirmButton: false,
            width: 400,
          });
          dispatch({
            type: ERROR,
            payload: obj.message,
          });
        });
      } else {
        console.log(err);
      }
    });
};

export const getAllParcels = (offset = 0) => (dispatch) => {
  const token = localStorage.getItem('token'), config = {
    method: 'GET',
    headers: new Headers({
      'x-access-token': token
    }),
  };
  fetch(
    `https://sendit2019.herokuapp.com/api/v1/parcels?offset=${offset}`,
    config
  )
    .then(handleErrors)
    .then((res) => {
      const parcels = Object.values(res.data),
        deliveredParcels = parcels.filter(parcel => parcel.status === 'Delivered'),
        inTransitParcels = parcels.filter(parcel => parcel.status === 'In-transit'),
        createdParcels = parcels.filter(parcel => parcel.status === 'Created'),
        canceledParcels = parcels.filter(parcel => parcel.status === 'Canceled');

      dispatch({ type: GET_DELIVERED_USER_ORDERS, payload: deliveredParcels });
      dispatch({ type: GET_INTRANSIT_USER_ORDERS, payload: inTransitParcels });
      dispatch({ type: GET_CREATED_USER_ORDERS, payload: createdParcels });
      dispatch({ type: GET_CANCELED_USER_ORDERS, payload: canceledParcels });
      dispatch({ type: GET_All_USER_ORDERS, payload: parcels });
    })
    .catch((err) => {
      if (err.json) {
        err.json().then((obj) => {
          Swal.fire({
            title: 'Error!',
            text: obj.message,
            type: 'error',
            timer: 3000,
            showConfirmButton: false,
            width: 400,
          });
          dispatch({
            type: ERROR,
            payload: err,
          });
        });
      } else {
        console.log(err);
      }
    });
};

export const createNewParcel = data => (dispatch) => {
  dispatch({ type: IS_LOADING });
  const token = localStorage.getItem('token');
  const config = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-access-token': token
    }),
    body: JSON.stringify(data),
  };
  fetch(
    'https://sendit2019.herokuapp.com/api/v1/parcels',
    config
  )
    .then(handleErrors)
    .then((res) => {
      const parcel = res.rows;
      Swal.fire({
        title: 'Success!',
        text: 'Successfully created parcel',
        type: 'success',
        timer: 3000,
        showConfirmButton: false,
        width: 400,
      });
      dispatch({ type: CREATE_NEW_PARCEL, payload: parcel });
    })
    .catch((err) => {
      console.log(err);
      if (err.json) {
        err.json().then((obj) => {
          Swal.fire({
            title: 'Error!',
            text: obj.message,
            type: 'error',
            timer: 3000,
            showConfirmButton: false,
            width: 400,
          });
          dispatch({
            type: ERROR,
            payload: obj.message,
          });
        });
      } else {
        console.log(err);
      }
    });
};
