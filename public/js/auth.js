import axios from 'axios';
import { showAlert } from './alert';

export const login = async (email, password) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: { email, password },
    });

    if (data.status === 'success') {
      showAlert('success', 'You are logged in successfully :)');
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
      url: 'http://127.0.0.1:8000/api/v1/users/logout',
    });

    if (data.status === 'success') location.reload();
  } catch (error) {
    console.log(error.response);
    showAlert('error', 'Error loggin out. Try again!');
  }
};
