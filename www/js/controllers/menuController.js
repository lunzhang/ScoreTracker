scoretracker.controller('menuController', function($scope, $ionicModal, $scoretracker,$localStorage) {

  $scope.games = $scoretracker.getGames();
  $scope.addGame = $scoretracker.addGame;
  $scope.deleteGame = $scoretracker.deleteGame;
  $scope.isDelete = false;
  $scope.showDelete = function(){
    $scope.isDelete=true;
  };
  $scope.hideDelete = function(){
    $scope.isDelete=false;
  };
});
