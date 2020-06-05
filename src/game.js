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
    var wildCard = 14;
    var wholeDeck = [...suit, ...suit, ...suit, ...suit, wildCard];
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
  }




  updatePlayerWins() {

  }

  resetGame() {
    // this.shuffleDeck();
  }

}
