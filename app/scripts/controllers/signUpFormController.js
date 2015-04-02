/**
 * Created by sxpandu on 3/30/2015.
 */
/*
The controller for the user sign up form.
 */

(function () {

    var module = angular.module("myApp");

    var signUpFormController = function($scope,userContactInfo,$log,$location,$http){
        $scope.userContactInfo = userContactInfo;
        $scope.submit = function (){
            $log.debug("signUpFormController - Enter form submit");
            if($scope.userContactInfoForm.$invalid){
                $log.debug("signUpFormController - form not valid. Not submitting");
                return false;
            }else{
                $log.debug("signUpFormController - form is valid. Submitting");
                $location.path("/formSubmit");
            }


        }
      $http.get('https://api.github.com/').success(function(){
            $log.debug("Called the github api");
        })
    }

    module.controller("signUpFormController",signUpFormController);

}());
