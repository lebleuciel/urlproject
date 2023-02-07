
var express = require('express');
var router = express.Router();
const controllers = require('../controllers/landing');



router.get('/', controllers.landing);
router.post('/findvault',controllers.findvault);
router.post('/', controllers.input);
router.get('/*', controllers.showvault);
  


module.exports = router;
