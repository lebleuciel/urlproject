
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
const fs = require('fs');

exports.UploadImage = (request, res) => {
  var Vault = require('../models/models');
  var url = request.body.url;
  var path = request.body.path;

  fs.readFile(path, (err, data) => {
    if (err) throw err;
    const image = Buffer.from(data).toString("binary");
    const imageDocument = { image };
  });
  Vault.updateOne({
    url: url
  }, {
    $set: {
      image: image
    }
  }, (error, docs) => {
    if (error) {
      console.log('error');
    } else {
      console.log('image added');
    }
  });
};


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





