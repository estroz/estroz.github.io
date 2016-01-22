var projectApp = angular.module('projectApp',[]);

projectApp.controller('projectsController', ['$scope', '$resource', function($scope, $resource) {
    var Project = $resource('/api/projects');
    
    Project.query(function (results){
        $scope.projects = results;
    });
    
    $scope.projects = []
    
    $scope.createProject = function(){
        var project = new Project();
        project.name = $scope.projectName;
        project.$save(function (result){
            $scope.projects.push(result);
            $scope.projectName = '';
        });
    }
}]);
