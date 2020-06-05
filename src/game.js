class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.deck = this.compileDeck();
    this.centralPile = [];
    this.currentPlayer = true;
  }

  compileDeck() {
    var suit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var wholeDeck = [...suit, ...suit, ...suit, ...suit];
    return wholeDeck;
  }

  shuffleDeck(cardPile) {
    for (var i = cardPile.length -1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * i)
      var temporary = cardPile[i]
      cardPile[i] = cardPile[randomIndex];
      cardPile[randomIndex] = temporary;
    }
  }

  deal() {
    for (var i = 0; i < this.deck.length -1; i++) {
      if ([i] % 2 === 0) {
        this.player1.hand.push(this.deck[i]);
      } else {
        this.player2.hand.push(this.deck[i]);
      }
    }
    this.centralPile.push(this.deck[this.deck.length - 1]);
  }

  playerTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

  playCard() {
    var playedCard = this.currentPlayer ? this.player1.hand.pop() : this.player2.hand.pop();
    this.centralPile.push(playedCard);
    this.playerTurn();
  }

  winTurn() {
    this.currentPlayer.hand.push(this.centralPile);
    this.shuffleDeck(this.currentPlayer.hand);
  }

  slapPile() {
    var topCard = this.centralPile[this.centralPile.length - 1];
    var secondCard = this.centralPile[this.centralPile.length - 2];
    var thirdCard = this.centralPile[this.centralPile.length - 3];
    if (topCard == 11 || topCard == secondCard || topCard == thirdCard) {
      this.winTurn();
    } else {
      var lostCard = this.currentPlayer.hand.unshift();
      // other player's hand.push(lostCard);
      // there will be issues with winTurn and slapPile bc it's not based on keyboard event
    }
  }

  checkWinConditions() {
    if (this.player1.hand.length === 0) {
      this.player2.playCard();
      this.playerTurn();
    }
    if (this.player2.hand.length === 0) {
      this.player1.playCard();
      this.playerTurn();
    }
  }

  gameWinSlap(winner) {
    if (topCard === 11 && player with cards.slapPile()) {
      var winningPlayer = this[`player${winner}`];
      this.player${id}.this.wins.push(game);
      resetGame();
    }
    if (topCard === 11 && player with no cards .slapPile()) {
      this.winTurn();
    }
    if (topCard != && player with no cards .slapPile()) {
      other player wins.
    }
  }


//  if (player w cards deals all cards and topCard != 11, that player winTurn() and deals until topCard = 11)
// if player with no cards slaps 11 first, that player.winTurn() and game is back to normal (enable alternate turns));
//  if topCard != 11 and empty card player slaps, other player wins



  // updatePlayerWins() {
  //   this.player${id}.wins.push(game);
  // }

  // resetGame() {
  //   this.player1.hand.length === 0;
  //   this.player2.hand.length === 0;
  //   this.deck
  //   this.shuffleDeck();
  //   deal();
  // }

}
