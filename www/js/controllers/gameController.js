scoretracker.controller('gameController', function($scope,$scoretracker,$localStorage,$ionicModal) {

  $scope.currentGame = $scoretracker.currentGame;

  $scope.addPoint1 = function(){
    $scope.currentGame.player1Score++;
  };

  $scope.subPoint1 = function(){
    $scope.currentGame.player1Score--;
  };

  $scope.addPoint2 = function(){
    $scope.currentGame.player2Score++;
  };

  $scope.subPoint2 = function(){
    $scope.currentGame.player2Score--;
  };

});
