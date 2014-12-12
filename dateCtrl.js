

angular.module('test').controller('dateProcess', function($scope) {
  $scope.submit = function() {
    var input;
    input = $scope.date.toString()
    $scope.dateFormated = input.slice(8,10) + '/' + input.slice(4,7) + '/' + input.slice(11,16)
  }
})