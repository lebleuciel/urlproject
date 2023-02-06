
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
  console.log('hi from landing!');
}

exports.input = (request,res) => {
  var yourdata = request.body.data;
  console.log(yourdata);
  res.send("heres ur url");

  var Vault = require('../models/models')
  const firstVault = new Vault ({
    data : yourdata
    });
  firstVault
    .save()
    .then(() => {
        console.log('new vault saved');
    })
    .catch(error => {
        console.log('ERROR', error);
    });
    

  
  }

  exports.findvault = (request,res) => {
    res.send("got it!");
    var requestinput = request.body.data;

    console.log("you entered :" ,requestinput);
    var vault = require('../models/models')

    vault.find({
      data : requestinput 
      // $or: [
      //   { data: requestinput },
      //   { password: requestinput }
      // ]
    }, (error, docs) => {
      if (error) {
        console.log('error');
      } else {
        console.log(" the person you look for: ", docs);
      }
    });
  }
  








