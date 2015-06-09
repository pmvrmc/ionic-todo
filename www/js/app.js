// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('todo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('TodoCtrl', function($scope, $ionicModal){
    $scope.tasks = [];

    $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
        $scope.taskModal = modal;
        },
        {
            scope: $scope,
            animation: 'slide-in-up'
        }
    );

    $scope.createTask = function(task) {
        $scope.tasks.push({
            title: task.title,
            done: false
        });
        $scope.taskModal.hide();
        task.title = "";
        task.done = false;
    };

    // Open our new task modal
    $scope.newTask = function() {
        $scope.taskModal.show();
    };

    // Close the new task modal
    $scope.closeNewTask = function() {
        $scope.taskModal.hide();
    };

    $scope.switch = function(task){
        task.done = !task.done;
        console.log(task.done);
    };

})
