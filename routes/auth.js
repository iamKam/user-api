// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/login - to log in the user
router.get('/:id', authController.getUser);

module.exports = router;
