const express = require('express');
const router = express.Router();

const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
} = require('../controllers/auth.controller');

const {
  getAllUsers,
  getSpecificUser,
  addNewUser,
  updateUser,
  deleteUser,
  updateProfile,
  deleteAccount,
} = require('../controllers/user.controller');

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/:token', resetPassword);
router.patch('/update-password', protect, updatePassword);

router.patch('/update-profile', protect, updateProfile);
router.delete('/delete-account', protect, deleteAccount);

router.route('/').get(getAllUsers).post(addNewUser);
router.route('/:id').get(getSpecificUser).patch(updateUser).delete(deleteUser);

module.exports = router;
