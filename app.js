var app = angular.module("taskApp", []);

app.controller("taskController", function ($scope) {

    $scope.tasks = [
        { name: "Complete FSD Lab", completed: false },
        { name: "AngularJS Practice", completed: true }
    ];

    $scope.addTask = function () {
        if ($scope.newTask) {
            $scope.tasks.push({ name: $scope.newTask, completed: false });
            $scope.newTask = "";
        }
    };

    $scope.deleteTask = function (index) {
        $scope.tasks.splice(index, 1);
    };

    $scope.editTask = function (task) {
        var updated = prompt("Edit Task", task.name);
        if (updated) task.name = updated;
    };

    $scope.remaining = function () {
        return $scope.tasks.filter(t => !t.completed).length;
    };

});
