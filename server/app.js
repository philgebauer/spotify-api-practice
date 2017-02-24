
var express = require('express');
var path = require('path');
var app = express();

const LOCALPORT = 3000;
var portDecision = process.env.PORT || LOCALPORT;

//Serve static files
app.use(express.static('public'));

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

//Index.html route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// app.use('/addStudent', addStudent);
// app.use('/admin', admin);
// app.use('/pizza', pizza);

app.listen(portDecision, function() {
  console.log("Listening on port ", portDecision);
});
