import '@babel/polyfill';
import { login, logout } from './auth';
import { displayMap } from './mapbox';
import { updateProfile } from './updateSettings';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const usernameInput = document.getElementById('name');
const currentPasswordInput = document.getElementById('password-current');
const passwordConfirm = document.getElementById('password-confirm');

const loginForm = document.querySelector('.form--login');
const updateUserForm = document.querySelector('.form-user-data');
const updatePasswordForm = document.querySelector('.form-user-password');

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

    login(emailInput.value, passwordInput.value);
  });

if (logoutBtn) logoutBtn.addEventListener('click', logout);

if (updateUserForm)
  updateUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    saveBtnProfile.textContent = 'Updating ...';

    const form = new FormData()
    form.append('photo', uploadForm.files[0])

    // doesn't work
    // const data = {
    //   name: usernameInput.value,
    //   ...(uploadForm.files[0] && { form }),
    // };

    // req.file is alwais undefined
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
