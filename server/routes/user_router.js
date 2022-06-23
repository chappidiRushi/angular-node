const express = require('express')
const jwt = require('jsonwebtoken');
const router = express.Router();
const UserController = require('../modals/user_controller');
const { tokenVerifier } = require('../modals/token_validator')
var users = new UserController();
require('dotenv').config();


router.get('/home', tokenVerifier, (req, res) => {
   console.log("req is", req);

   res.status(200).send({ "success": "success" });
});
router.get('/get/logs', tokenVerifier, (req, res) => {
   console.log("req is", req);

   res.status(200).send({ "success": "success" });
});
router.post('/login', async (req, res) => {
   try {
      const isValidUser = await users.validateLogin(req.body.email, req.body.password);
      if (!isValidUser) return res.status(404).send({ logIn: false })
      var userCredentials = {
         email: req.body.email,
         password: req.body.password
      }
      const options = {
         expiresIn: '2h',
      }
      const token = jwt.sign(userCredentials, process.env.TOKEN_KEY,options);
      res.status(200).send({logIn: true, token: token});
   } catch (e) {
      res.status(400).send({ reason: "uncaught exception found " + e })
   }
});
module.exports = router;
