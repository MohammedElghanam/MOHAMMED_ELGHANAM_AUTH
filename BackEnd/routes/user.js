const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, (req, res) => {
  const role = req.user.role;
  res.json({ msg: `Welcome ${role}` });
});

module.exports = router;
