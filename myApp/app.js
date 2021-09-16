var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope) {
    $scope.student = {
        firstName: "IDK",
        lastName: "Blogs",
        
        fullName: function() {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});