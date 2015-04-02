/**
 * Created by sxpandu on 3/30/2015.
 */
/*
A directive which can be placed as an attribute to any form element to automatically apply the styles and
validators as applicable
 "<ng-messages-include src='src/includes/errorMessages.html'" + ">" + "</ng-messages-include>"

 var message = "<div class='help-block' ng-messages='" + elementFullName + ".$error' ng-if='"+elementFullName+".$touched && "+elementFullName+".$invalid'"+
 +">" +  "</div>";
 */
(function () {
    var module = angular.module("myApp");

    var errorMessages = "<span ng-message='required'>Field is Required</span>"+
                          "<span ng-message='minlength'>Field is too short</span>";


    var applyStyles = function (element){
        var input = element.find("input[type='text'] , input[type='password']");
        var name = input.attr('name');
        input.addClass("form-control");
        element.addClass("form-group");
        element.find('label').addClass("control-label");
        return name;
    }
    
    var addErrorMessages = function (element,form,name,$compile,scope) {
        var elementFullName = form.$name  + "." + name;
        var message = "<div class='help-block' ng-messages='" + elementFullName + ".$error' ng-if='"+elementFullName+".$touched && "+elementFullName+".$invalid' "+">" + errorMessages + "</div>";
        element.append( $compile(message)(scope));

    }

    var link = function($compile){
            return function (scope,element,arg,form){
            var name = applyStyles($(element));
            addErrorMessages($(element),form,name,$compile,scope);

        };
    }
    var formElement = function($compile){
        return{
            restrict: "A",
            link: link($compile),
            require:"^form"
        }
    }

    module.directive("formElement",formElement);

}());
