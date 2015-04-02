/**
 * Created by aa79308 on 3/31/2015.
 */
/*
 The controller for the states info on main page.
 */

(function () {

    var module = angular.module("myApp");
    var homePageController = function($scope,$log,$location){
        $scope.states = States;

        $scope.redirectTo = function (state) {
            $log.debug("clicked "+state);
            $location.path("main/state/"+state);
        }

    };

    var States = [
        {
            name :'Colorado',
            code:'CO'

        },
        {
            name :'Minnesota',
            code:'MN'

        },
        {
            name :'Oregon',
            code:'OR'

        },
        {
            name :'Washington',
            code:'WA'

        }
    ];
    module.controller("homePageController",homePageController);
}());