/**
 * Dashboard Angular Service
 */
App.factory('DashboardService', function($http) {
    return {
        helloWorld: function() {
            return "hola mundo Dashboard";
        },
        getPricing: function() {
            return $http.get( '/account/pricing', {} );
        },
        getLessonAttempt: function(lessonAttemptId) {
            return $http.get('/account/supportAdmin/lessonAttempt', {params: {id: lessonAttemptId }});
        },
        postChangePassword: function(user, command) {
            return $http.post( '/account/password', {user: user, command: command} );
        }
    };
});