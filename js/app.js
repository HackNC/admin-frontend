var admin_console = angular.module('admin-console', []);

admin_console.component('editModal', {
    templateUrl: 'templates/modal_template.html',
});

admin_console.component('sideBar', {
    templateUrl: 'templates/sidebar_template.html'
});

admin_console.controller('AdminController', ['$scope', '$http', function($scope, $http) {
    /*
    $http({
        method: '',
        url: '',
        param : '', // if get,
        data: ''
    }).then(function success(response){

    }, function error(response) {

    });
    */
    $scope.hackers = [{
      "team_mates": [
        "You're not currently on a team"
      ], 
      "user_data": {
        "accepts_mlh_code": "True", 
        "accepts_mlh_release": "None", 
        "apply_date": "2016-09-06 22:46:46.478035", 
        "background": "None", 
        "can_edit": "True", 
        "checked_in": "None", 
        "created_at": "2016-09-06 22:44:47", 
        "date_of_birth": "1993-10-03", 
        "dietary_restrictions": "None", 
        "discriminator": "hacker_user", 
        "email": "labeasle@uncg.edu", 
        "first_name": "Lucas", 
        "gender": "Male", 
        "github": "None", 
        "graduation": "2018-05-01", 
        "is_admin": "False", 
        "last_name": "Beasley", 
        "major": "Computer Science", 
        "mlh_id": "20268", 
        "needs_reimbursement": "No", 
        "notes": "None", 
        "pending_status": "x", 
        "phone_number": "+13364015323", 
        "preferred_travel_method": "None", 
        "resume_location": "None", 
        "rsvp": "None", 
        "rsvp_by": "None", 
        "rsvp_date": "None", 
        "school_id": "2498", 
        "school_name": "University of North Carolina at Greensboro", 
        "shirt_size": "Unisex - M", 
        "special_needs": "None", 
        "team_name": "None", 
        "travel_cost": "None", 
        "updated_at": "2016-09-06 22:46:38", 
        "user_created_at": "2016-09-06 22:46:46.477994", 
        "user_id": "634", 
        "user_last_updated_at": "2016-09-06 22:54:53.967326", 
        "visible_status": "o", 
        "website": "None", 
        "what_to_learn": "None"
      }
    }, 
    {     
        "team_mates": [
        "You're not currently on a team"
      ], 
      "user_data": {
        "accepts_mlh_code": "True", 
        "accepts_mlh_release": "None", 
        "apply_date": "2016-09-06 22:46:46.478035", 
        "background": "None", 
        "can_edit": "True", 
        "checked_in": "None", 
        "created_at": "2016-09-06 22:44:47", 
        "date_of_birth": "1993-10-03", 
        "dietary_restrictions": "None", 
        "discriminator": "hacker_user", 
        "email": "labeasle@uncg.edu", 
        "first_name": "Abbot", 
        "gender": "Male", 
        "github": "None", 
        "graduation": "2018-05-01", 
        "is_admin": "False", 
        "last_name": "Beasley", 
        "major": "Computer Science", 
        "mlh_id": "20268", 
        "needs_reimbursement": "No", 
        "notes": "None", 
        "pending_status": "x", 
        "phone_number": "+13364015323", 
        "preferred_travel_method": "None", 
        "resume_location": "None", 
        "rsvp": "None", 
        "rsvp_by": "None", 
        "rsvp_date": "None", 
        "school_id": "2498", 
        "school_name": "University of North Carolina at Greensboro", 
        "shirt_size": "Unisex - M", 
        "special_needs": "None", 
        "team_name": "None", 
        "travel_cost": "None", 
        "updated_at": "2016-09-06 22:46:38", 
        "user_created_at": "2016-09-06 22:46:46.477994", 
        "user_id": "1", 
        "user_last_updated_at": "2016-09-06 22:54:53.967326", 
        "visible_status": "o", 
        "website": "None", 
        "what_to_learn": "None"
      }
    },
    ];

    $scope.visible_hackers = $scope.hackers;
    $scope.active_hacker = $scope.visible_hackers[0];
    $scope.openEditModal = function(hacker) {
        $scope.active_hacker = hacker;
        $('#modal1').openModal({
            dismissible: false
        });
    };
    $scope.openSideBar = function(hacker) {
        $scope.active_hacker = hacker;
        $('.button-collapse').sideNav('show');
    };

    $scope.sort_by_property = function(property) {
        $scope.visible_hackers = $scope.visible_hackers.sort(function(a, b){
                return (a['user_data'][property] < b['user_data'][property]) ? -1 : (a['user_data'][property] > b['user_data'][property]) ? 1 : 0;
            });
    };
    $scope['first_name'] = '';
    $scope['user_id'] = '';
    $scope['email'] = '';
    $scope['school_name'] = '';
    $scope['phone_number'] = '';
    $scope.filter_by_property = function(property){
        $scope.visible_hackers = $scope.hackers.filter(function(element, index, arr) {
             return element['user_data'][property].startsWith($scope[property]);
        });
    }
}]);