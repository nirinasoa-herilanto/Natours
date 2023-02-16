import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { authHandler, logout } from './auth';
import { displayMap } from './mapbox';
import { bookTour } from './stripe';
import { updateProfile } from './updateSettings';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('name');
const currentPasswordInput = document.getElementById('password-current');
const passwordConfirm = document.getElementById('password-confirm');

const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const updateUserForm = document.querySelector('.form-user-data');
const updatePasswordForm = document.querySelector('.form-user-password');
const bookTourBtn = document.getElementById('book-tour');

const map = document.getElementById('map');
const logoutBtn = document.querySelector('.nav__el--logout');
const saveBtnPassword = document.querySelector('.btn--save-password');
const saveBtnProfile = document.querySelector('.btn--save-profile');
const uploadForm = document.querySelector('.form__upload');

if (map) {
  const locations = JSON.parse(map.dataset.locations);
  displayMap(locations);
}

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = { email: emailInput.value, password: passwordInput.value };

    authHandler(data, 'login');
  });

if (signupForm)
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      name: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      passwordConfirm: passwordConfirm.value,
    };

    authHandler(data, 'signup');
  });

if (logoutBtn) logoutBtn.addEventListener('click', logout);

if (updateUserForm)
  updateUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    saveBtnProfile.textContent = 'Updating ...';

    const data = {
      name: usernameInput.value,
      ...(uploadForm.files[0] && { photo: uploadForm.files[0] }),
    };

    await updateProfile(data, 'Profile');

    saveBtnProfile.textContent = 'Save settings';
  });

if (updatePasswordForm)
  updatePasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    saveBtnPassword.textContent = 'Updating ...';

    const data = {
      password: passwordInput.value,
      passwordConfirm: passwordConfirm.value,
      currentPassword: currentPasswordInput.value,
    };

    await updateProfile(data, 'password');

    saveBtnPassword.textContent = 'Save password';

    passwordInput.value = '';
    passwordConfirm.value = '';
    currentPasswordInput.value = '';
  });

if (bookTourBtn)
  bookTourBtn.addEventListener('click', async (e) => {
    e.target.textContent = 'Processing ...';

    const { tourId } = e.target.dataset;
    await bookTour(tourId);
  });
