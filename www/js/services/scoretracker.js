scoretracker.service('$scoretracker', function($localStorage) {

  var games= $localStorage.games || [];

  this.getGames = function(){
    return games;
  }

  this.addGame = function(){
    var newGame = {
      id: games.length,
      title : "Game " + games.length,
      player1 : "",
      player2 : ""
    };
    games.push(newGame);
    $localStorage.games = games;
  }

});
