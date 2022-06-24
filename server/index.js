require('./environments/config');
var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  Access_Control_Allow_Origin: "*",
  origin:"*",
  method:['GET','POST','PATCH','DELETE','PUT'],
  allowedHeaders:'Content-Type, Authorization, Origin, X-Requested-With, Accept'
})); 

app.use('/api', require('./routes/api'));
app.use('/user', require('./routes/user_router'));

app.use(express.static('dist'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.get('/main*', (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT, function (err) {
  if (err) console.error(err);
  console.log(`server is listening on http://localhost:${process.env.PORT}`);
});