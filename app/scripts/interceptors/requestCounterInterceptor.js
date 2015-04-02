/**
 * Created by sxpandu on 3/30/2015.
 */
/*
An interceptor which keeps tracks of the current request count. Helps in showing work spinners etc
 */

(function () {
    var module = angular.module('myApp');
    var requestCounterInterceptor = function ($q,$log){
        var requestCount = 0;
          return {
                request : function (config){
                    requestCount+=1;

                    return $q.when(config);

                },
                requestError: function(requestError){
                    requestCount-=1;
                    return $q.reject(requestError);
                },
                response: function(response) {
                    requestCount-=1;
                    return $q.when(response);
                },
                responseError: function(responseError){
                    requestCount-=1;
                    return $q.reject(responseError);
                },
                getRequestCount: function(){
                    return requestCount;
                }
        }

        }


    module.factory("requestCounterInterceptor",requestCounterInterceptor);
    module.config(function($httpProvider){
        $httpProvider.interceptors.push("requestCounterInterceptor");
    });
}());