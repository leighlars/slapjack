class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.deck = cards;
    this.centerPile = [];
    this.currentPlayer = true;
    this.header = "";
  }

// general play
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
    this.player1.hand = this.deck.slice(0, 26);
    this.player2.hand = this.deck.slice(26, 53);
  }

  playerTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

// check slap conditions
  slapPile(player) {
    var topCard = this.centerPile[this.centerPile.length - 1];
    var secondCard = this.centerPile[this.centerPile.length - 2];
    var thirdCard = this.centerPile[this.centerPile.length - 3];
    this.checkSlapJack(player);
    if (topCard.value === secondCard.value) {
      this.winTurn(player);
      this.header = "double";
    } if (topCard.value === thirdCard.value) {
      this.winTurn(player);
      this.header = "sandwich";
    } else {
      this.checkBadSlap(player);
    }
    // this.gameWinSlap();
     // there will be issues with
     // winTurn, slapPile, checkBadSlap
    // bc it's not based on keyboard event/currentPlayer
  }

  // help here
  winTurn(player) {
    player.hand.push(this.centerPile);
    this.shuffleCards(player.hand);
  }

// need help here
  checkBadSlap(player) {
    if (player1) {
      var lostCard = this.player1.hand.unshift();
      player2.hand.push(lostCard);
      this.header = "badSlap";
    }
    if (player2) {
      var lostCard = this.player2.hand.unshift();
      player1.hand.push(lostCard);
      this.header = "badSlap";
    }
  }

  checkSlapJack(player) {
    var topCard = this.centerPile[this.centerPile.length - 1];
    if ("jack" === topCard.value) {
      this.winTurn();
      this.header = "slapjack";
    }
  }

// check win conditions
  gameWinSlap() {
    var losingPlayer = players.find(player => player.hand.length === 0);
    var winningPlayer = players.find(player => player.hand.length != 0);
    var topCard = this.centerPile[this.centerPile.length - 1];
    var jacks = [cards[0], cards[1], cards[2], cards[3]];
    if ((jacks.includes(topCard) && winningPlayer.slapPile) ||
        (!jacks.includes(topCard) && losingPlayer.slapPile)) {
          // ^^ find which player
        this.gameOver(winningPlayer);
    }
    if (jacks.includes(topCard) && losingPlayer.slapPile()) {
      this.winTurn();
    }
  }

// end game
  gameOver(winner) {
    winner.wins.push(game);
    winner.saveWinsToStorage();
  }

  resetGame() {
    this.player1.hand.length === 0;
    this.player2.hand.length === 0;
    this.deal();
  }

}
