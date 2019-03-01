/* eslint-disable no-undef */
import swal from 'sweetalert';
import handleErrors from '../helpers/errorHelper';


const loginUser = userData => (dispatch) => {
  console.log('working');
  const config = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(userData),
  };

  fetch('https://sendit2019.herokuapp.com/api/v1/auth/login', config)
    .then(handleErrors)
    .then((res) => {
      localStorage.setItem('token', res.data[0].token);
      const { user } = res.data[0];
      user.token = res.data[0].token;
      return dispatch({ type: 'SET_CURRENT_USER', payload: user });
    })
    .catch((err) => {
      if (err.json) {
        err.json().then((obj) => {
          swal({
            icon: 'warning',
            title: obj.message,
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

export default loginUser;
