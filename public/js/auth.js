import axios from 'axios';
import { showAlert } from './alert';

/**
 * Use to handle log in/ signup action by user
 * @param {Object} inputData data needed on action handler
 * @param {string} type login | signup
 */
export const authHandler = async (inputData, type) => {
  try {
    const url =
      type === 'login' ? '/api/v1/users/login' : '/api/v1/users/signup';

    const { data } = await axios({
      method: 'POST',
      url,
      data: { ...inputData },
    });

    if (data.status === 'success') {
      showAlert(
        'success',
        `${
          type !== 'login'
            ? 'Welcome to Natours :)'
            : ' You are logged in successfully :)'
        }`
      );
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};

export const logout = async () => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if (data.status === 'success') location.reload();
  } catch (error) {
    // console.log(error.response);
    showAlert('error', 'Error loggin out. Try again!');
  }
};
