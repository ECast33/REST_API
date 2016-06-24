var app = angular.module('REST_API', ['ngRoute']);


app.config(function($routeProvider){
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

app.controller('mainController', function  ( $scope ) {



});

app.controller('authController', function ( $scope ) {

    $scope.user =
    {
        username: '',
        password: ''
    };

    $scope.error_message = '';

    $scope.login = function ( )
    {
      //TODO implement this
        $scope.error_message = 'login request for ' + $scope.user.username;

    };

    $scope.register = function ( )
    {
        //TODO: Implement this
        $scope.error_message = 'register request for ' + $scope.user.username;
    }

});