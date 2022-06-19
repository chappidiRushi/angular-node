const { initClient } = require('./connect-db');
class logInUsers {
   constructor(client) {
      this.client = client;
   }

   async getAllusers() {
      // const entries = await this.client.query('SELECT * FROM login_users limit 1');
      // await this.client.end();
      // return entries
   }
   async validateLogin(req) {
      const userName = req.query?.email;
      const password = req.query?.password;
      console.log(userName, password);
      const entries =await this.client.query(`SELECT * from login_users where username='${userName}' and password='${password}' `);
      if (entries.rows.length > 0) {
         return true;
      }
      return false;
   }
}
module.exports = logInUsers;
