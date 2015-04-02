/**
 * Created by sxpandu on 3/30/2015.
 */
/*
A decorator for the $interpolate service that will helps us debug binding issues and log the same.
 */
(function () {
    var module = angular.module('myApp');

    module.config(function ($provide){

        $provide.decorator("$interpolate",function($delegate,$log){

            var interpolateWrapper = function (){
                var bindingFunction = $delegate.apply(this,arguments);
                if(angular.isFunction(bindingFunction)&& arguments[0]){
                    return bindingWrapper(bindingFunction,arguments[0].trim());
                }
                return bindingFunction;
            };
            var bindingWrapper = function(bindingFunction,bindingExpression){
                return function(){
                    var result = bindingFunction.apply(this,arguments);
                    var  trimmedResult = result.trim();
                    if(!trimmedResult){
                        $log.warn(bindingExpression+" is not bound.")
                    }
                    return result;
                }
            }
            angular.extend(interpolateWrapper,$delegate);
            return interpolateWrapper;
        });


    });
}());