angular.module('discipline').factory('DisciplinesService', ['$resource',function($resource){
    return $resource('/disciplines.json', {},{
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
}]);