class Player {
  constructor(id) {
    this.id = id;
    this.wins = JSON.parse(localStorage.getItem(`player-${this.id}-wins`)) || 0;
    this.hand = [];
  }

  playCard() {
    var player = game.currentPlayer ? game.player1 : game.player2;
    if (game.player1.hand.length === 0 || game.player2.hand.length === 0) {
      this.addToCardPile(player);
    } else {
      this.addToCardPile(player);
      game.playerTurn();
    }
    if (game.player1.hand.length === 0 && game.player2.hand.length === 0) {
      game.winTurn(player);
    }
  }

  addToCardPile(player) {
    var playedCard = player.hand.pop();
    game.centerPile.unshift(playedCard);
  }

  saveWinsToStorage() {
   localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins));
  }

}
