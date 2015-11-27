scoretracker.controller('gameController', function($scope,$scoretracker,$localStorage,$ionicModal) {

  $scope.currentGame = $scoretracker.currentGame;
  var modal = jQuery("#edit-modal").andSelf().html();
  $scope.modal = $ionicModal.fromTemplate(modal, {
      scope: $scope,
      animation: 'slide-in-up'
  });

  $scope.editGame = function() {
     $scope.modal.show();
   };
});
