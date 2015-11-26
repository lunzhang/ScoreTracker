scoretracker.controller('gameController', function($scope, $ionicModal, $scoretracker,$localStorage) {

  $scope.currentGame = $localStorage.games[0];
});
