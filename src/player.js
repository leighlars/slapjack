class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];
  }

  playCard() {
    var playedCard = game.currentPlayer ? game.player1.hand.pop() : game.player2.hand.pop();
    game.centerPile.push(playedCard);
    changeTopCard(playedCard);
    game.playerTurn();
    hideHand();
  }

  saveWinsToStorage() {
   localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins));
 }

 retrieveWinsFromStorage() {
   this.wins = JSON.parse(localStorage.getItem(`player-${this.id}-wins`)) || [];
   // updatePlayerWinsText(this);
 }


}
