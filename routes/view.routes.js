const express = require('express');
const { isLoggedIn, protect } = require('../controllers/auth.controller');
const {
  displayOveview,
  displayTourDetail,
  displayUserLogin,
  displayProfile,
} = require('../controllers/view.controller');

const router = express.Router();

router.get('/login', isLoggedIn, displayUserLogin);
router.get('/', isLoggedIn, displayOveview);
router.get('/tours/:slug', isLoggedIn, displayTourDetail);

router.get('/profile', protect, displayProfile);

module.exports = router;
