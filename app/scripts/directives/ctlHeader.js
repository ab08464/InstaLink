/**
 * Created by sxpandu on 3/26/2015.
 */
(function () {
    var module = angular.module('myApp');

    var ctlHeader = function ($log) {
    return{
            restrict:'E',
            templateUrl:"/InstaLink/app/src/includes/ctlHeader.html"
        }
    }
    module.directive('ctlHeader', ctlHeader);


}());
