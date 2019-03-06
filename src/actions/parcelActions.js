import Swal from 'sweetalert2';
import handleErrors from '../helpers/errorHelper';


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

      dispatch({ type: 'GET_DELIVERED_USER_ORDERS', payload: deliveredParcels });
      dispatch({ type: 'GET_INTRANSIT_USER_ORDERS', payload: inTransitParcels });
      dispatch({ type: 'GET_CREATED_USER_ORDERS', payload: createdParcels });
      dispatch({ type: 'GET_CANCELED_USER_ORDERS', payload: canceledParcels });
      dispatch({ type: 'GET_All_USER_ORDERS', payload: parcels });
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
            type: 'GET_ERRORS',
            payload: err,
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

      dispatch({ type: 'GET_DELIVERED_USER_ORDERS', payload: deliveredParcels });
      dispatch({ type: 'GET_INTRANSIT_USER_ORDERS', payload: inTransitParcels });
      dispatch({ type: 'GET_CREATED_USER_ORDERS', payload: createdParcels });
      dispatch({ type: 'GET_CANCELED_USER_ORDERS', payload: canceledParcels });
      dispatch({ type: 'GET_All_USER_ORDERS', payload: parcels });
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
            type: 'GET_ERRORS',
            payload: err,
          });
        });
      } else {
        console.log(err);
      }
    });
};
