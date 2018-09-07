angular.module('gitRepositoryListing')
    .component('repository', {
        templateUrl: 'components/repository/repository.html',
        bindings: {
            repository: '='
        }
    })
;