var express   = require('express');
var router    = express.Router();

var users = require('../api/controlers/users')();
var players = require('../api/controlers/players')();

// router.get('/', function(req, res, next) {
//     res.render('index', { title: "REST_API"});
// });

router.route('/users'   ).post( users.post );
router.route('/players' ).post( players.post );

module.exports = router;
