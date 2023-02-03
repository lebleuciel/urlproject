
// exports.get_landing = function(req, res) {
//     res.render('landing', { title: 'url' });
//   };

// exports.submit_lead = function(req, res, next) {
//   console.log("url lead:" , req.body.submit_email);
//   res.redirect('/');
// };
//---------------------------------
// const models = require('../models/models');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://bleuciel:<hasti1234>@hastiscluster.nofaw4a.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

exports.landing = () => {
  console.log('hi give me your name and password !');
}

exports.input = (request,res) => {
  console.log('hi!');
  var namee = request.body.name;
  console.log(namee);
  var password = request.body.password ;
  console.log(password);
  res.send("got your name and password!");
  client.connect(err => {
    const collection = client.db("test").collection("people");
    collection.insertOne({ name: namee }, function (err, res) {
      console.log("Data inserted successfully");
      client.close();
    });
  });}





