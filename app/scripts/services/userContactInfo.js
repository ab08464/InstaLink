/**
 * Created by sxpandu on 3/30/2015.
 */
/*
A service that stores all the user contact information. Service is used since it is singleton. Using this helps
us converting to json easier.
 */
(function () {
    var module = angular.module('myApp');

    var userContactInfo = function (){
        var billingInfo= {
            firstName :"",
            lastName:"",
            emailAddress:"",
            confirmEmail:""
        }
        return {
            userName: "",
            password: "",
            firstName: "",
            confirmPassword:"",
            lastName: "",
            city:"",
            address:[],
            state:"",
            zipCode:"",
            phone:"",
            secretQuestion:"",
            secretAnswer:"",
            creditBillingInfo: billingInfo
        }

    }

    module.factory("userContactInfo",userContactInfo);
}());
