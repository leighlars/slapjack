class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.deck = this.compileDeck();
    this.centralPile = [];
    this.currentPlayer = true;
  }

// general play
  compileDeck() {
    var suit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var wholeDeck = [...suit, ...suit, ...suit, ...suit];
    return wholeDeck;
  }

  shuffleCards(cardPile) {
    for (var i = cardPile.length -1; i > 0; i--) {
      var randomIndex = Math.floor(Math.random() * i)
      var temporary = cardPile[i]
      cardPile[i] = cardPile[randomIndex];
      cardPile[randomIndex] = temporary;
    }
  }

  deal() {
    this.deck.shuffleCards(this.deck);
    for (var i = 0; i < this.deck.length -1; i++) {
      if ([i] % 2 === 0) {
        this.player1.hand.push(this.deck[i]);
      } else {
        this.player2.hand.push(this.deck[i]);
      }
    }
  }

  playerTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

// check slap conditions
  winTurn() {
    this.currentPlayer.hand.push(this.centralPile);
    this.shuffleCards(this.currentPlayer.hand);
  }

  slapPile() {
    var topCard = this.centralPile[this.centralPile.length - 1];
    var secondCard = this.centralPile[this.centralPile.length - 2];
    var thirdCard = this.centralPile[this.centralPile.length - 3];
    if (topCard == 11 || topCard == secondCard || topCard == thirdCard) {
      this.winTurn();
      // 3 if statements ?
      changeHeader("slapjack");
      changeHeader("sandwich");
      changeHeader("double");
    } else {
      var lostCard = this[player${id}.hand].unshift();
      changeHeader("badslap");
      // other player's hand.push(lostCard);
      // there will be issues with winTurn and slapPile bc it's not based on keyboard event
    }
  }

// check win conditions
  checkEmptyHand() {
    var players = [this.player1, this.player2];
    var losingPlayer = players.find(player => player.hand.length === 0);
    var winningPlayer = players.find(player => player.hand.length != 0);
    winningPlayer.player.playCard();
    this.playerTurn();
  }

  gameWinSlap(winningPlayer, losingPlayer) {
    var topCard = document.querySelector(".central-pile");
    if (topCard === 11 && winningPlayer.slapPile() ||
      topCard != 11 && losingPlayer.slapPile()) {
        this.gameOver(winningPlayer);
    }
    if (topCard === 11 && losingPlayer.slapPile()) {
      this.winTurn();
    }
  }

  gameOver(winner) {
      winner.wins.push(game);
      winner.saveWinsToStorage();
      changeHeader("win", winner);
      setTimeout(changeHeader, 500);
      setTimeout(this.resetGame, 500;
  }

  resetGame() {
    this.player1.hand.length === 0;
    this.player2.hand.length === 0;
    document.querySelector(".central-pile").add("hidden");
    deal();
  }

}
