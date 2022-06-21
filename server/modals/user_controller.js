const { initClient } = require('./pg-connection');
class UserController {
   constructor() {
      this.enableConnection();
   }
   async enableConnection() {
      this.pg = await initClient();
   }


   async getAllusers() {
      const entries = await this.pg.query('SELECT * FROM login_users limit 1');
      return entries;
   }
   async validateLogin(req) {
      const userName = req.body?.email;
      const password = req.body?.password;
      const entries = await this.pg.query(`SELECT * from login_users where username='${userName}' and password='${password}' `);
      if (entries.rows.length > 0) {
         return true;
      }
      return false;
   }
}
module.exports = UserController;