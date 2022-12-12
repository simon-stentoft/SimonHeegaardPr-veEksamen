const express = require("express")
const bodyParser = require('body-parser');

// express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 
//app.use('/images', express.static('images'));

// listen for requests
app.listen(8000);

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// npx json-server --watch data/db1.json --port 8000
//routes
app.get('/sankesteder', (req, res) => {
    res.render('index', { title: 'Sarking'});
});

/*app.get('/sankesteder/:id', (req, res) => {
    res.render('index', { title: 'Home'});
});*/


app.post('/sankesteder', (req, res) => {

});
