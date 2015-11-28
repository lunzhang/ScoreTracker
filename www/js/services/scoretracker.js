scoretracker.service('$scoretracker', function($localStorage) {
  var currentGame;
  this.getGames = function(){
    return $localStorage.games;
  };
  if(!$localStorage.games){
    $localStorage.games= {};
  }
  this.addGame = function(){
    var nextId = parseInt( Object.keys($localStorage.games)[Object.keys($localStorage.games).length-1]  ) + 1;
    if(!nextId){
      nextId=0;
    }
    var newGame = {
      id: nextId,
      title : "Game " + nextId,
      player1 : "Player 1",
      player2 : "Player 2",
      player1Score : 0,
      player2Score : 0
    };
    $localStorage.games[nextId]=newGame;
  };

  this.deleteGame = function(game){
    delete $localStorage.games[game.id];
  };

});
