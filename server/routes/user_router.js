const { Router } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router();
const UserController = require('../modals/user_controller');
var users = new UserController();


router.get('/', (req, res) => res.send('from user route'));
router.post('/login', async (req, res) => {
   try {
      json = {}
      json.logIn = await users.validateLogin(req);
      json.token = jwt.sign(json, 'token');
      res.status(200).send(json);
   } catch (e){
      res.status(400).status({reason: "uncaught exception found "+ e})
   }
});
module.exports = router;
