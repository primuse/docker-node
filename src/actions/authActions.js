import Swal from 'sweetalert2';
import history from '../history';
import handleErrors from '../helpers/errorHelper';


const loginUser = userData => (dispatch) => {
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
      dispatch({ type: 'LOGIN_USER', payload: user });
      history.push('/dashboard');
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

export default loginUser;
