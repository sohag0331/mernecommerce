const express = require('express');
const { signup, signin } = require('../controller/auth');
const router = express.Router();
const {  isRequestValidator, validatesignupRequest, validatesigninRequest } = require('../validators/auth');


router.post('/signup',validatesignupRequest, isRequestValidator, signup);
router.post('/signin', validatesigninRequest,isRequestValidator, signin);

//router.post('/profile', requireSignin, (req, res) => {
  //  res.status(200).json({user: 'profile'})
//});
   

module.exports = router;