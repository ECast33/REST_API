var express   = require('express');
var router    = express.Router();
var _         = require('lodash');
var mysql      = require('mysql');
var mysqlServ = require('../config/mysqlServ')();
var sprintf   = require('sprintf');


router.route('/readAll')
    
    .post(

        function ( req, res )
        {
            //Stored procedure script
            var sp_script = sprintf( "CALL %s( );",
                'sp_Player_BuilderAll'
            );
    
            mysqlServ.executeSql( sp_script ).then (

                function ( value )
                {

                    res.send( value );

                }
            );

        });

router.route('/write')

    .post(

        function ( req, res )
        {

            var player =
            {
                name    : ' Some Player ' + _.random(1, 10000, false),
                sport   : 'Some Sport ' + _.random(1, 10000, false)

            };

            var sp_script = sprintf( "CALL %s( %s, %s );",
                'sp_Player_Create',
                mysql.escape( player.name ),
                mysql.escape( player.sport )
            );

            mysqlServ.executeSql( sp_script ).then (

                function ( value )
                {

                    res.send( value );

                }
            );

        });

router.route('/read')

    .post(

        function ( req, res )
        {

            var player =
            {
                name     : ' Some Player ' + _.random(1, 10000, false),
                sport    : 'Some Sport ' + _.random(1, 10000, false),
                playerId : 1

            };

            var sp_script = sprintf( "CALL %s( %s, %s, %s );",
                'sp_Player_BuilderOne',

                mysql.escape( player.name ),
                mysql.escape( player.sport ),
                mysql.escape( player.playerId)
            );

            mysqlServ.executeSql( sp_script ).then (

                function ( value )
                {

                    res.send( value );

                }
            );

        });

module.exports = router;
