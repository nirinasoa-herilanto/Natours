import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `http://127.0.0.1:8000/api/v1/bookings/checkout-session/${tourId}`,
    });

    if (data.status === 'success') location.assign(data.session.url);
  } catch (error) {
    showAlert('error', 'Something went wrong during checkouts!');
  }
};
