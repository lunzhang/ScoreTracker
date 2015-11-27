scoretracker.controller('menuController', function($scope, $ionicModal, $scoretracker,$localStorage) {

  $scope.games = $scoretracker.getGames();
  $scope.addGame = $scoretracker.addGame;
  $scope.deleteGame = $scoretracker.deleteGame;
  $scope.isDelete = false;
  $scope.changeDelete = function(){
    $scope.isDelete=!$scope.isDelete;
  };
  $scope.setCurrentGame = function(game){
    $scoretracker.currentGame = game;
  };
});
