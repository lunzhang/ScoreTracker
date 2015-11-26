scoretracker.controller('menuController', function($scope, $ionicModal, $scoretracker,$localStorage) {


  $scope.games = $scoretracker.getGames();
  $scope.addGame = $scoretracker.addGame;
  window.$scoretracker = $scoretracker;
  window.$localStorage = $localStorage;
});
