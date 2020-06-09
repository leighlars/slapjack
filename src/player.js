class Player {
  constructor(id) {
    this.id = id;
    this.wins = this.retrieveWinsFromStorage();
    this.hand = [];
  }

  playCard() {
    if (game.player1.hand.length === 0 || game.player2.hand.length === 0) {
      var playedCard = game.currentPlayer ? game.player1.hand.pop() : game.player2.hand.pop();
      game.centerPile.unshift(playedCard);
    } else {
      var playedCard = game.currentPlayer ? game.player1.hand.pop() : game.player2.hand.pop();
      game.centerPile.unshift(playedCard);
      game.playerTurn();
    }
    if (game.player1.hand.length === 0 && game.player2.hand.length === 0) {
      var player = game.currentPlayer ? game.player1 : game.player2;
      game.winTurn(player);
    }
  }

  saveWinsToStorage() {
   localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins));
  }

 retrieveWinsFromStorage() {
   console.log(JSON.parse(localStorage.getItem(`player-${this.id}-wins`)));
   return JSON.parse(localStorage.getItem(`player-${this.id}-wins`)) || 0;
 }

}
