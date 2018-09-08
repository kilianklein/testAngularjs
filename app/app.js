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
    ;
})();