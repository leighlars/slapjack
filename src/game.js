class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.deck = cards;
    this.centerPile = [];
    this.currentPlayer = true;
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
    debugger;
    this.checkSlapJack();
    if (topCard.value === secondCard.value) {
      this.winTurn();
      changeHeader("double", player);
    } if (topCard.value === thirdCard.value) {
      this.winTurn();
      changeHeader("sandwich", player);
    } else {
      this.checkBadSlap();
    }
      this.gameWinSlap();
     // there will be issues with
     // winTurn, slapPile, checkBadSlap
    // bc it's not based on keyboard event/currentPlayer
  }

  winTurn() {
    var player = this.currentPlayer ? this.player1 : this.player2;
    player.hand.push(this.centerPile);
    this.shuffleCards(player.hand);
  }

  checkBadSlap(player) {
    if (player1) {
      var lostCard = this.player1.hand.unshift();
      player2.hand.push(lostCard);
      changeHeader("badSlap", this.player2, this.player1);
    }
    if (player2) {
      var lostCard = this.player2.hand.unshift();
      player1.hand.push(lostCard);
      changeHeader("badSlap", this.player1, this.player2);
    }
  }

  checkSlapJack() {
    var topCard = this.centerPile[this.centerPile.length - 1];
    var jacks = [cards[0], cards[1], cards[2], cards[3]];
    for (var i = 0; i < jacks.length; i++) {
      if (jacks[i].value === topCard.value) {
        this.winTurn();
        changeHeader("slapjack", player, player);
        // find which player ^^
      }
    }
  }

// check win conditions
  gameWinSlap() {
    var losingPlayer = players.find(player => player.hand.length === 0);
    var winningPlayer = players.find(player => player.hand.length != 0);
    var topCard = this.centerPile[this.centerPile.length - 1];
    var jacks = [cards[0], cards[1], cards[2], cards[3]];
    if ((jacks.includes(topCard) && winningPlayer.slapPile ||
        (!jacks.includes(topCard) && losingPlayer.slapPile) {
          // ^^ find which player
        this.gameOver(winningPlayer);
    }
    if (jacks.includes(topCard) && losingPlayer.slapPile()) {
      this.winTurn();
      hideHand();
    }
  }

  gameOver(winner) {
    winner.wins.push(game);
    winner.saveWinsToStorage();
    updatePlayerWinsText(winner);
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
