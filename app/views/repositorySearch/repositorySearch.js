var baseGitRepositorySearchUrl = "https://api.github.com/search/repositories?q=";

angular.module('gitRepositoryListing.repositorySearchView', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/repositorySearch', {
            templateUrl: 'views/repositorySearch/repositorySearch.html',
            controller: 'RepositorySearchCtrl'
        });
    }])
    .controller('RepositorySearchCtrl', ['$scope', '$http', function($scope, $http){
        var ctrl = this;
        this.updateRepositoryList = function(searchInput){
            if(searchInput !== undefined){
                $http({
                    method: 'GET',
                    url: baseGitRepositorySearchUrl + searchInput
                }).then(function successCallback(response) {
                    ctrl.repositoryList = response.data.items;
                }, function errorCallback(response) {
                    alert(response.data.message);//TODO render with style
                });
            }
        }
    }]);