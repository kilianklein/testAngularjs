var baseGitRepositoryIssueListUrl = 'https://api.github.com/search/issues?q=repo:';

angular.module('gitRepositoryListing.repositoryIssueListView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/repositoryIssueList', {
            templateUrl: 'views/repositoryIssueList/repositoryIssueList.html',
            controller: 'RepositoryIssueListCtrl'
        });
    }])
    .controller('RepositoryIssueListCtrl', ['$scope', '$http', function($scope, $http){
        this.updateRepositoryIssueList = function(repositoryFullName){
            $scope.repositoryFullName = repositoryFullName;

            $http({
                method: 'GET',
                url: baseGitRepositoryIssueListUrl + repositoryFullName
            }).then(function successCallback(response) {
                $scope.issueList = response.data.items;
            }, function errorCallback(response) {
                alert(response.data.message);
            });
        }
    }])
;