/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('viewApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
            .when("/allpersons", {
                templateUrl: "views/allpersons.html",
                controller: "GetPersons"
            })
            .when("/newperson", {
                templateUrl: "views/newperson.html",
                controller: "AddPerson"
            })
            .otherwise({
                redirectTo: "/allpersons"
            });
});

var persons = [
    {name: "Jens", age: 18}
    , {name: "Peter", age: 23}
    , {name: "Hanne", age: 23}
];

app.controller("AddPerson", function ($scope) {
    $scope.name = ""
    $scope.age = ""


    $scope.addPerson = function (data) {

        person = {name: $scope.name, age: $scope.age};
        persons.push(person);
    };
});

app.controller('GetPersons', function ($scope) {
    $scope.persons = persons;
});