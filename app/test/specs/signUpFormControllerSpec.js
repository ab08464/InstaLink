/**
 * Created by sxpandu on 3/31/2015.
 */
/*
Test class for the signUpFormController
 */
(function () {

    describe("the signUpFormController", function() {
        var scope, $controllerConstructor
        beforeEach(module('myApp'));

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            $controllerConstructor = $controller;

        }));

        it('should should have scope variable with value 3', function() {
            var ctrl = $controllerConstructor('signUpFormController',{$scope:scope,userContactInfo:{},$log:{},$location:{},$http:{}});
            expect(scope.testValue).toBe(3);
        });

          it('should should have scope variable with new value 4', function() {
              var ctrl = $controllerConstructor('signUpFormController',{$scope:scope,userContactInfo:{},$log:{},$location:{},$http:{}});
              scope.testValue = 4;
              scope.$digest();

            expect(scope.testValue).toBe(4);
        });

    });


}());