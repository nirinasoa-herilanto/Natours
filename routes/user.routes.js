const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
  logout,
} = require('../controllers/auth.controller');

const {
  getAllUsers,
  getSpecificUser,
  addNewUser,
  updateUser,
  deleteUser,
  updateProfile,
  deleteAccount,
  getMe,
  viewMyProfile,
} = require('../controllers/user.controller');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);

router.use(protect); // protect all routes after this middleware

router.get('/profile', getMe, viewMyProfile);
router.patch('/update-profile', updateProfile);
router.patch('/update-password', updatePassword);
router.delete('/delete-account', deleteAccount);

router.use(restrictTo('admin')); // only for administator

router.route('/').get(getAllUsers).post(addNewUser);
router.route('/:id').get(getSpecificUser).patch(updateUser).delete(deleteUser);

module.exports = router;
