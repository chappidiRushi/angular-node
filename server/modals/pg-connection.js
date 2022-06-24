const { Client } = require('pg');

var clientConfig = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
}
console.log(process.isProduction);
if (process.isProduction) {
  clientConfig.ssl = {
    rejectUnauthorized: false
    }
}

module.exports.initClient = async () => {
  const client = new Client(clientConfig);
  await client.connect((error) => {
    if (error) console.log("Failed to connect db", error);
  });
  return client;
};