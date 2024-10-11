const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword', authController.resetPassword);

router.get('/getusers', authController.getAllusers);


module.exports = router;
