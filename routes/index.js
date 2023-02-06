var express = require('express');
var router = express.Router();
const controllers = require('../controllers/landing');



router.get('/', controllers.landing);
router.post('/', controllers.input);
router.post('/findperson',controllers.findperson);



module.exports = router;
