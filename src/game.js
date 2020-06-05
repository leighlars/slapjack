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
    playerTurn();
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

    if (any player.hand.length === 0) {
      other player can deal consecutively now (disable alternating turns)
      if (current player slaps 11, current player wins);
      if current player !slap 11, other player
      if (that player deals all cards and none are 11, this.currentPlayer.hand.push(centralPile)
    }
  }

// If the player with cards left deals all their cards into the center without revealing a Jack,
// the central pile returns to that player’s hand, is shuffled, and the player must continue to deal until a Jack is revealed
// When a Jack is revealed, the player who is out of cards can slap it.
// The central pile is then their new hand, the game continues as normal.
// If however, the player who is out of cards slaps something that is not a Jack,
// or if the player who still has cards slaps the Jack first, then the player who is out of cards loses and the game is over!
// Doubles and Sandwiches are not valid when one player is completely out of cards - in this case, only a Jack can save them!
// The only way the player who still has cards can win is by slapping the Jack before the player without cards left does




  updatePlayerWins() {

  }

  resetGame() {
    // this.shuffleDeck();
  }

}
