var controllers, discipline;

discipline = angular.module('discipline', ['templates', 'ngRoute', 'ngResource', 'controllers']);

// Routes
discipline.config([
    '$routeProvider', function($routeProvider) {
        return $routeProvider.when('/', {
            templateUrl: "index.html",
            controller: 'DisciplinesController'
        }).when('/disciplines/new', {
            templateUrl: "new.html",
            controller: 'DisciplinesController'
        }).when('/disciplines/:id', {
            templateUrl: "show.html",
            controller: 'DisciplinesController'
        }).when('/disciplines/:id/edit', {
            templateUrl: "edit.html",
            controller: 'DisciplinesController'
        });
    }
]);

controllers = angular.module('controllers', []);