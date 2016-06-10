var express = require('express');
var router = express.Router();

module.exports = function( passport ){

    //sends successful login state back to angular
    router.get('/success', function(req, res){
        res.send({state: 'success', user: req.user ? req.user : null});
    });

    //sends failure login state back to angular
    router.get('/failure', function(req, res){
        res.send({state: 'failure', user: null, message: "Invalid username or password"});
    });

    //log in
    router.get('/', function( req, res )
    {
        res.render('../views/index', {

            isAuthenticated: req.isAuthenticated(),
            user : req.user
        });

    });
    router.get('/login' , function ( req, res )
    {
        res.render('login');
    });

    

    router.post('/login', passport.authenticate('local'), function (req, res ) {

        res.redirect('/');
    });

    //sign up
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/auth/success',
        failureRedirect: '/auth/failure'
    }));

    //log out
    router.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    
    //api

//     router.use('/api', passport.authenticate('local'));
//
// function ensureAuth( req, res, next ) {
//
//     if( req.isAuthenticated())
//     {
//         next();
//     }else
//     {
//         res.send( 403 );
//     }
// }
//     router.post('/api' , ensureAuth, function ( req, res )
//     {
//
//         res.json( [ {value : 'foo '},{value : 'bar'},{value : 'baz'}]);
//
//     });

    return router;

};