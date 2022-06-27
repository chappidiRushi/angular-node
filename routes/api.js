const { Router } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router();
const UserController = require('../modals/user_controller');
var users = new UserController();
router.get('/', (req, res) => res.send('from api route'));
router.get('/login',async (req, res) => {
   var entries = await users.getAllusers();
   res.send('login api route')
});
module.exports = router;