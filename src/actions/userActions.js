import Swal from 'sweetalert2';
import handleErrors from '../helpers/errorHelper';


const getAllUsers = (offset = 0) => (dispatch) => {
  const token = localStorage.getItem('token'), config = {
    method: 'GET',
    headers: new Headers({
      'x-access-token': token
    }),
  };
  return fetch(
    `https://sendit2019.herokuapp.com/api/v1/users?offset=${offset}`,
    config
  )
    .then(handleErrors)
    .then((res) => {
      dispatch({ type: 'GET_All_USERS', payload: res.data });
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
        dispatch({
          type: 'GET_ERRORS',
          payload: err,
        });
      }
    });
};


export default getAllUsers;
