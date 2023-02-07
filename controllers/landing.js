
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
  var Vault = require('../models/models')
  var newurl = "http://localhost:8000/"+yourdata ;
  var response = {
    message: "heres ur url",
    url: newurl
  };


  var firstVault = new Vault ({
    data : yourdata,
    url : newurl
    });
  firstVault
    .save()
    .then(() => {
        console.log('new vault saved');
    })
    .catch(error => {
        console.log('ERROR', error);
    });
    res.status(200).send(response);
  }


  exports.findvault = (request,res) => {
    var requestinput = request.body.url;
    var Vault = require('../models/models')
    Vault.find({
      url : requestinput 
    }, 
    
    (error, docs) => {
      if (error) {
        console.log('error');
      } else {
        res.send(docs[0].data);
      }
    });
  }
  

exports.showvault = (request,res) => {
  console.log("you made it");
  var requesturl = "http://localhost:8000"+ request.url;
  console.log(requesturl)
  var Vault = require('../models/models')
  Vault.find({
    url : requesturl
  }, 
  
  (error, docs) => {
    if (error) {
      console.log('error');
    } else {
      res.send(docs[0].data);
    }
  });}





