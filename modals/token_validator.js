const jwt = require('jsonwebtoken');
const UserController = require('./user_controller');
const userControl = new UserController();

module.exports.tokenVerifier = (req, res, next) => {
   try {      
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (token == null) return res.status(401).send({error: "No token available"});
      jwt.verify(token, process.env.TOKEN_KEY, (error, user)=> {
         if (error) {
            if (error.name === "TokenExpiredError"){
               return res.status(401).send({ error: "Token expired" });
            } else {
               return res.status(401).send({ error: "Invalid Token" });
            }
         }
         req.user = user;
         const isValidUser = userControl.validateLogin(user.email, user.password);
         if (isValidUser) {
            next();
         } else {
            return res.status(401).send({error: "Unable to verify user"});
         }
      })
   } catch (error) {
      return res.status(401).send({error: "No token available"+error});
   }
}