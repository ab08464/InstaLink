/**
 * Created by sxpandu on 3/30/2015.
 */
/*
 The controller for the user sign up form.
 */

(function () {

    var module = angular.module("myApp");

    var resultController = function($scope,userContactInfo){
        $scope.userContactInfo = userContactInfo;

    }


    module.controller("resultController",resultController);

}());

