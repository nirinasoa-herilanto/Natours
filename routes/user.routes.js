const express = require('express');
const {
  getAllUsers,
  getSpecificUser,
  addNewUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');

const router = express.Router();

router.route('/').get(getAllUsers).post(addNewUser);
router.route('/:id').get(getSpecificUser).patch(updateUser).delete(deleteUser);

module.exports = router;
