scoretracker.service('$scoretracker', function($localStorage) {

  this.getGames = function(){
    return $localStorage.games;
  }

  this.addGame = function(){
    var newGame = {
      id: Object.keys($localStorage.games).length,
      title : "Game " + Object.keys($localStorage.games).length,
      player1 : "",
      player2 : "",
      player1Score : 0,
      player2Score : 0
    };
    $localStorage.games[Object.keys($localStorage.games).length]=newGame;
  }

  this.deleteGame = function(game){
    delete $localStorage.games[game.id];
  }

});
