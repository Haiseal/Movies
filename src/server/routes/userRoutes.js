// userRoutes.js

const express = require('express');
const userHandler = require('../handlers/userHandler');
const userRouter = express.Router();

// Route to register a new user
userRouter.post('/signup', userHandler.registerUser);

// Route to login a user
userRouter.post('/login', userHandler.loginUser);

module.exports = userRouter;
