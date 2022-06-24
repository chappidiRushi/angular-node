var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();
const PORT = 3000;
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

app.get('', (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// app.connect();

app.listen(PORT, function (err) {
    if (err) console.error(err);
});