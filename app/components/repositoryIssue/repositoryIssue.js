angular.module('gitRepositoryListing')
    .component('repositoryIssue', {
        templateUrl: 'components/repositoryIssue/repositoryIssue.html',
        bindings: {
            issue: '='
        }
    })
;