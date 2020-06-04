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

  shuffleDeck() {
    for (var i = this.deck.length -1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * i)
      var temporary = this.deck[i]
      this.deck[i] = this.deck[randomIndex];
      this.deck[randomIndex] = temporary;
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

  }

  slapPile() {

  }

  updatePlayerWins() {

  }

  resetGame() {
    // this.shuffleDeck();
  }

}
