var controllers;

controllers = angular.module('controllers');
controllers.controller("DisciplinesController", [
    '$scope', '$routeParams', '$location', '$resource', '$http', 'DisciplinesService', 'DisciplineService',
    function($scope, $routeParams, $location, $resource, $http, DisciplinesService, DisciplineService) {

        // get all disciplines in backed rails by ajax
        $scope.loadDisciplines = function() {
            $scope.disciplines = [];
            $scope.disciplines = DisciplinesService.query();
            $scope.disciplines.$promise.then(function() {
               $scope.CRE();
            });
        };

        // CRE FUNCTION
        $scope.CRE = function() {
            $scope.cre = 0;
            //console.log("Enter in Function CRE");
            workload = 0;
            result = 0;
            if($scope.disciplines.length > 0){
                $scope.disciplines.forEach(function(discipline, key) {
                    workload += discipline.workload;
                    result += discipline.average * discipline.workload;
                });
                $scope.cre = result / workload;
            }
            return $scope.cre;
        };

        // destroy a specific discipline based in ID
        $scope.deleteDiscipline = function(disciplineId){
            DisciplineService.delete({ id: disciplineId }, function(){
                $scope.loadDisciplines();
                $location.path('/');
            });
        };

        // save discipline function
        $scope.saveDiscipline = function() {
            console.log("Discipline:" + $scope.discipline);
            DisciplinesService.create({discipline: $scope.discipline}, function(){
                $location.path('/');
            }, function(error){
                console.log(error)
            });
        };


        $scope.findDiscipline = function() {
            console.log("enter edit function");
            $scope.discipline = DisciplineService.get({id: $routeParams.id});

        };

        if($routeParams.id){
            $scope.findDiscipline();
        }
        else{
        }

        $scope.update = function() {
            DisciplineService.update({id: $scope.discipline.id}, {discipline: $scope.discipline}, function() {
                $location.path('/');
            }, function(error){
                console.log(error);
            });
        };


        // LINKS
        $scope.newDiscipline = function() {
            return $location.path("/disciplines/new");
        }

        $scope.edit = function(disciplineId) {
            return $location.path("/disciplines/" + disciplineId + "/edit");
        }

        $scope.view = function(disciplineId) {
            console.log("enter view functon");
            return $location.path("/disciplines/" + disciplineId);
        }

        $scope.back = function() {
            return $location.path("/");
        }

        // call to load disciplines
        $scope.loadDisciplines();
    }
]);






