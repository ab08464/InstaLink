// Declare app level module which depends on views, and components
(function () {
    'use strict';
    var module = angular.module('myApp', ['ngRoute','ngMessages']);

    var routes = [
        {
            url:"/main/",
            options: {
                templateUrl : "/InstaLink/app/src/main.html"
            }
        },
        {
            url:"/main/state/:state",
            options: {
                templateUrl : "/InstaLink/app/src/state/stateProperties.html"
            }

        },
        {
            url:"/signUp",
            options: {
                templateUrl : "/InstaLink/app/src/signUpForm.html"
            }
        },{
            url:"/formSubmit",
            options: {
                templateUrl : "/InstaLink/app/src/formSubmit.html"
            }

        }

    ];

    var routeRegister = function($routeProvider){
        for(var i =0;i<routes.length;i++){
            $routeProvider.when(routes[i].url,routes[i].options)
        }
        $routeProvider.otherwise({redirectTo : "/main"});

    }

    module.config(routeRegister);
}());
