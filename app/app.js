(function() {
    var app = angular.module("gitRepositoryListing", [
            'ngRoute',
            'gitRepositoryListing.repositorySearchView',
            'gitRepositoryListing.repositoryIssueListView'
        ])
        .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({redirectTo: '/repositorySearch'});
        }])
        .controller("MainCtrl", [function(){
            var ctrl = this;
            this.selectedRepository = null;

            this.setSelectedRepository = function(repository){
                ctrl.selectedRepository = repository;
            }
        }])
    ;
})();