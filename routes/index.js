var express = require('express');
var router = express.Router();
const controllers = require('../controllers/landing');



router.get('/', controllers.landing);
router.post('/', controllers.input);
router.post('/findvault',controllers.findvault);

var routerdata = require("../controllers/landing");
router.get(routerdata,controllers.showvault);

module.exports = router;
