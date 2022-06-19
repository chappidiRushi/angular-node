const http = require('http');
const { initClient } = require('./connect-db');
const logInUsers = require('./user');
var express = require('express');
const cors = require('cors')
var app = express();
const PORT = 1431;

app.use(cors({
  Access_Control_Allow_Origin: "*",
  origin:"*",
  methode:['GET','POST','PATCH','DELETE','PUT'],
  allowedHeaders:'Content-Type, Authorization, Origin, X-Requested-With, Accept'
})); 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.get('/api/login', async function (req, res) {
    const connection = await initClient();
  const users = new logInUsers(connection);
  console.log(req.url);
  var response = await users.validateLogin(req);
  const status = {
    allowedToLogIn: response
  }
    console.log();
  res.status(200).send(status)
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});