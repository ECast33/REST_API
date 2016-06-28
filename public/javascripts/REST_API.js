var app = angular.module('REST_API', ['ngRoute', 'ngResource']).run( function ( $rootScope ) {

    $rootScope.authenticated = false;
    $rootScope.current_user = '';

});


app.config(
    function( $routeProvider )
    {
        $routeProvider
    //the timeline display
        .when('/', {
            templateUrl: 'main.html',
            controller: 'mainController'
        })
        //the login display
        .when('/login', {
            templateUrl: 'login.html',
            controller: 'authController'
        })
        //the signup display
        .when('/register', {
            templateUrl: 'register.html',
            controller: 'authController'
        });
});

app.controller('mainController', function  ( $scope, $rootScope ) {


    $scope.user = $rootScope.current_user;
});

app.controller('authController', function ( $scope, $http, $rootScope, $location ) {

    $scope.user =
    {
        userName: '',
        password: '',
        userId  : -1
    };

    $scope.error_message = '';

    $scope.login = function ( )
    {

        $scope.user.read = 1;

        $http.post('api/users', $scope.user ).success(
            
            function( data )
            {
                if( 0 == data.length  )
                {
                    $location.path('/register');
                }
                else
                {
                    $rootScope.authenticated = true;
                    $rootScope.current_user = data[0].userName;
                    $location.path('/');
                }


            });

    };

    $scope.register = function ( )
    {

        $scope.user.write = 1;

        $http.post('api/users', $scope.user ).success(

            function( data )
            {
                if( 0 == data.length  )
                {
                    $scope.error_message = 'Failed to register for ' + $scope.user.username;
                    $location.path('/register');
                }
                else
                {
                    $rootScope.authenticated = true;
                    $rootScope.current_user = data[0].userName;
                    $location.path('/');
                }

            });

    }

});