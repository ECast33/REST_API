var _         = require('lodash');
var mysql      = require('mysql');
var mysqlServ = require('../../config/mysqlServ')();
var sprintf   = require('sprintf');

module.exports = function ( )  {
    
    function readImpl(req, res, next )
    {
        var sp_script = sprintf( "CALL %s( %s, %s, %s );",
            'sp_Player_BuilderOne',

            mysql.escape( req.body.name ),
            mysql.escape( req.body.sport ),
            mysql.escape( req.body.playerId)
        );

        mysqlServ.executeSql( sp_script ).then (

            function ( value )
            {

                res.send( value );

            }
        );
    }
    
    function writeImpl( req, res, next )
    {
        var sp_script = sprintf( "CALL %s( %s, %s );",
            'sp_Player_Create',
            mysql.escape( req.body.name ),
            mysql.escape( req.body.sport )
        );

        mysqlServ.executeSql( sp_script ).then (

            function ( value )
            {

                res.json( value );

            }
        );
    }
    
    
    function readAllImpl( req, res, next  )
    {
        var sp_script = sprintf( "CALL %s( );",
            'sp_Player_BuilderAll'
            
        );

        mysqlServ.executeSql( sp_script ).then (

            function ( value )
            {

                res.json( value );

            }
        );
    }
    
    function post( req, res, next)
    {
        if ( undefined === req.body )
        {
            console.log( chalk.red('!! Attempting Tag.post : ERROR - missing body' ));

            return res.status( 401 ).send( {
                success: false,
                message: "Invalid parameter"
            } );

        } else if( 1 == req.body.readAll )
        {
            return readAllImpl (req, res, next);

        } else if( 1 == req.body.write )
        {
            return writeImpl(req, res, next);

        }else if( 1 == req.body.read )
        {
            return readImpl( req, res, next );

        }else
        {
            return res.status( 401 ).send( {
                success: false,
                message: "Invalid parameter"
            } );

        }

    }

    var api =
    {
        post : post
    };

    return api;
};