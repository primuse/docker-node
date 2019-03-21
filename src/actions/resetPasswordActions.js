import Swal from 'sweetalert2';
// import history from '../history';
import {
  SEND_RESET_EMAIL, SEND_RESET_EMAIL_ERROR
} from './actionTypes';
import handleErrors from '../helpers/errorHelper';

export const resetPassword = email => (dispatch) => {
  const config = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(email),
  };

  fetch('https://sendit2019.herokuapp.com/api/v1/reset/email', config)
    .then(handleErrors)
    .then(() => {
      Swal.fire({
        title: 'Success',
        text: 'A reset link has been sent to your mail',
        type: 'success',
        timer: 3000,
        showConfirmButton: false,
        width: 400,
      });
      dispatch({ type: SEND_RESET_EMAIL, payload: true });
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
            type: SEND_RESET_EMAIL_ERROR,
            payload: false,
          });
        });
      } else {
        console.log(err);
      }
    });
};
