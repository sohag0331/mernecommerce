const express = require('express');
const { requireSignin } = require('../../common-middleware');
const { signup, signin, signout } = require('../../controller/admin/auth');
const { isRequestValidator, validatesignupRequest, validatesigninRequest } = require('../../validators/auth');
const router = express.Router();


router.post('/admin/signup', validatesignupRequest, isRequestValidator, signup);
router.post('/admin/signin',validatesigninRequest, isRequestValidator, signin);
router.post('/admin/signout', signout);


module.exports = router;