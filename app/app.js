(function() {
    var app = angular.module("gitRepositoryListing", [
            'ngRoute',
            'gitRepositoryListing.repositorySearchView'
        ])
        .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.otherwise({redirectTo: '/repositorySearch'});
        }])
    ;
})();