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
   async validateLogin(userName = '', password = '') {
      const entries = await this.pg.query(`SELECT * from users where email='${userName}' and password='${password}' `);
      if (entries.rows.length > 0) {
         return true;
      }
      return false;
   }
   async isEmailExist(email) {
      const entries = await this.pg.query(`SELECT * from users where email='${userName}'`);
      if (entries.rows.length > 0) {
         return true;
      }
      return false;
   }
   async signUpUser(body) {

      const entries = await this.pg.query(`ALTER Table users add`);
      if (entries.rows.length > 0) {
         return true;
      }
      return false;
   }
}
module.exports = UserController;