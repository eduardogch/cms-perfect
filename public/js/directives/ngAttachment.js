/**
 * Attachment Angular Directive
 */
App.directive('ngAttachment', [function() {
    return {
        restrict: 'A',
        templateUrl: '/assets/avatar_upload.html',
        scope: {
            attachments: '=',
            removeAttachment: '&',
            message: '='
        },
        controller: function($scope) {
            
        },
        link: function($scope, element, attribs) {
            
        }
    };
}]);

