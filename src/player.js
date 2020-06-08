class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
    this.retrieveWinsFromStorage();
  }

  playCard() {
    if (game.player1.hand.length != 0 || game.player2.hand.length != 0) {
      var playedCard = game.currentPlayer ? game.player1.hand.pop() : game.player2.hand.pop();
      game.centerPile.unshift(playedCard);
      game.playerTurn();
    }
  }

  saveWinsToStorage() {
   localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins));
 }

 retrieveWinsFromStorage() {
   this.wins = JSON.parse(localStorage.getItem(`player-${this.id}-wins`)) || [];
   updatePlayerWinsText(this);
 }


}
