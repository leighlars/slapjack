class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.deck = this.compileDeck();
    this.centerPile = [];
    this.currentPlayer = true;
  }

// general play
  compileDeck() {
    var redSuit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var blueSuit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var goldSuit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var greenSuit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var wholeDeck = redSuit.concat(blueSuit, goldSuit, greenSuit);
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
    this.shuffleCards(this.deck);
    var half1 = this.deck.slice(0, 26);
    var half2 = this.deck.slice(26, 53);
    this.player1.hand.push(half1);
    this.player2.hand.push(half2);
  }

  playerTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

// check slap conditions
  winTurn() {
    this.currentPlayer.hand.push(this.centerPile);
    this.shuffleCards(this.currentPlayer.hand);
  }

  slapPile() {
    var topCard = this.centerPile[this.centerPile.length - 1];
    var secondCard = this.centerPile[this.centerPile.length - 2];
    var thirdCard = this.centerPile[this.centralPile.length - 3];
    if (topCard == 11 || topCard == secondCard || topCard == thirdCard) {
      this.winTurn();
      // 3 if statements ?
      changeHeader("slapjack");
      changeHeader("sandwich");
      changeHeader("double");
    } else {
      var lostCard = `this.currentPlayer${id}.hand.unshift()`;
      // other player's hand.push(lostCard);
      changeHeader("badSlap");
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
    handDisplay(losingPlayer);
  }

  gameWinSlap(winningPlayer, losingPlayer) {
    checkEmptyHand();
    var topCard = document.querySelector(".center-pile");
    if ((topCard === 11 && winningPlayer.slapPile()) ||
        (topCard != 11 && losingPlayer.slapPile())) {
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
    setTimeout(this.resetGame, 500);
  }

  resetGame() {
    this.player1.hand.length === 0;
    this.player2.hand.length === 0;
    document.querySelector(".center-pile").classList.add("hidden");
    this.deal();
  }

}
