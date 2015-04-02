/**
 * Created by sxpandu on 3/30/2015.
 */
/*
Custom directive to show our loading icon whenever a request is in progress
 */

(function () {
    var module = angular.module('myApp');
    var requestCount;
    var workSpinner = function (requestCounterInterceptor){
        return{
            restrict: 'AE',
            transclude:true,
            scope:{},
            template:"<ng-transclude ng-show='showSpinner'></ng-transclude>",
            link: function(scope){
                scope.$watch(function (){
                    return requestCounterInterceptor.getRequestCount();
                    }
                    ,function(requestCount) {
                        scope.showSpinner = requestCount;
                    })
            }
        }
    }
    module.directive("workSpinner",workSpinner)

}());