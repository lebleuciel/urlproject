
// exports.get_landing = function(req, res) {
//     res.render('landing', { title: 'url' });
//   };

// exports.submit_lead = function(req, res, next) {
//   console.log("url lead:" , req.body.submit_email);
//   res.redirect('/');
// };
//---------------------------------
const models = require('../models/models');



exports.landing = (request,res) => {
  console.log('hi give me your name and password !')

}

exports.input = (request,res) => {
  var namee = request.body.name;
  var password = request.body.password;

  console.log(namee);
  res.send("got your name and password!") 
}






// exports.getIndex = (req, res) => {
//   res.send('hi from db!');
// };

// exports.getUsers = (req, res) => {
//   models.User.find((err, users) => {
//     if (err) res.send(err);
//     res.json(users);
//   });
// };

// exports.createUser = (req, res) => {
//   let user = new models.User(req.body);
//   user.save((err) => {
//     if (err) res.send(err);
//     res.json({ message: 'User created!' });
//   });
// };
