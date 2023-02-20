import axios from 'axios';
import { showAlert } from './alert';

/**
 * Use to handle update user profile and password
 * @param {Object} inputData input data ex: {name: "Nirinasoa Herilanto"}
 * @param {string} type password | data
 */
export const updateProfile = async (inputData, type) => {
  try {
    const url =
      type.toLowerCase() === 'password'
        ? 'http://127.0.0.1:8000/api/v1/users/update-password'
        : 'http://127.0.0.1:8000/api/v1/users/update-profile';

    const { data } = await axios({
      method: 'PATCH',
      url,
      ...(type.toLowerCase() !== 'password' && {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      data: { ...inputData },
    });

    if (data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully :)`);
    }
  } catch (error) {
    showAlert('error', error.response.data.message);
  }
};
