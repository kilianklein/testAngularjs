var baseGitRepositoryIssueListUrl = 'https://api.github.com/search/issues?q=repo:';

angular.module('gitRepositoryListing.repositoryIssueListView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/repositoryIssueList', {
            templateUrl: 'views/repositoryIssueList/repositoryIssueList.html',
            controller: 'RepositoryIssueListCtrl'
        });
    }])
    .controller('RepositoryIssueListCtrl', ['$scope', '$http', function($scope, $http){
        var ctrl = this;
        $scope.$watch('mainCtrl.selectedRepository.full_name', function(repositoryFullName) {
            if(repositoryFullName !== undefined){
                ctrl.repositoryFullName = repositoryFullName;

                $http({
                    method: 'GET',
                    url: baseGitRepositoryIssueListUrl + repositoryFullName
                }).then(function successCallback(response) {
                    ctrl.issueList = response.data.items;
                }, function errorCallback(response) {
                    alert(response.data.message);
                });
            }
        });
    }])
;