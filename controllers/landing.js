
// exports.get_landing = function(req, res) {
//     res.render('landing', { title: 'url' });
//   };

// exports.submit_lead = function(req, res, next) {
//   console.log("url lead:" , req.body.submit_email);
//   res.redirect('/');
// };
//---------------------------------
// const models = require('../models/models');

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
  }










