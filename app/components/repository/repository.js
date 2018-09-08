function RepositoryController() {
    var ctrl = this;

    ctrl.viewIssuesClick = function() {
        ctrl.onViewIssuesClick({repository: ctrl.repository});
    };
}

angular.module('gitRepositoryListing')
    .component('repository', {
        templateUrl: 'components/repository/repository.html',
        controller: RepositoryController,
        bindings: {
            repository: '=',
            onViewIssuesClick: "&"
        }
    })
;