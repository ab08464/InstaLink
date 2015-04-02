/**
 * Created by aa79308 on 3/31/2015.
 */
/*
 The controller for the statesproperties on statesproperties page.
 */
(function () {
    var module = angular.module("myApp");
    var statePropertiesController = function ( $scope ,$routeParams, $location) {
        $scope.state = $routeParams.state;
        $scope.statesArray = statesArray;

        $scope.redirectTo = function () {
            $location.path("/signUp");
        }
    };

    var statesArray = [
        {
            name :'Colorado',
            code:'CO',
            properties:[
                {
                    link:'Littleton Development RXG',
                    image:'/Instalink/app/images/1colarado.jpg'
                }
            ]

        },
        {
            name :'Minnesota',
            code:'MN',
            properties:[
                {
                     link:'Arcata',
                     image:'/Instalink/app/images/1minnesota.jpg'
                },
                {
                    link:'A-Mill Artist Lofts',
                    image:'/Instalink/app/images/2minnesota.jpg'
                },
                {
                    link:'Red 20',
                    image:'/Instalink/app/images/3minnesota.jpg'
                }

            ]

        },
        {
            name :'Oregon',
            code:'OR',
            properties:[
                {
                    link:'Burnside 26',
                    image:'/Instalink/app/images/1oregon.jpg'
                },
                {
                    link:'Division St Lofts',
                    image:'/Instalink/app/images/2oregon.jpg'
                },
                {
                    link:'East 12th Lofts',
                    image:'/Instalink/app/images/3oregon.jpg'
                },
                {
                    link:'Grant Park Village',
                    image:'/Instalink/app/images/4oregon.jpg'
                },
                {
                    link:'Hawthorne 26 Test',
                    image:'/Instalink/app/images/5oregon.jpg'
                },
                {
                    link:'Moreland Crossing Apartments',
                    image:'/Instalink/app/images/6oregon.jpg'
                },
                {
                    link:'The Bijou',
                    image:'/Instalink/app/images/7oregon.jpg'
                },
                {
                    link:'Waterline',
                    image:'/Instalink/app/images/8oregon.jpg'
                }
            ]
        },
        {
            name :'Washington',
            code:'WA',
            properties:[
                {
                    link:'Malmo',
                    image:'/Instalink/app/images/1Washinton.jpg'
                },
                {
                    link:'University Parkway Apartments',
                    image:'/Instalink/app/images/2Washinton.jpg'
                }
            ]

        }
    ];

    module.controller("statePropertiesController",statePropertiesController);

}());