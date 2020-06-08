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
    var topCard = this.centerPile[0];
    var secondCard = this.centerPile[1];
    var thirdCard = this.centerPile[2];
    if (this.player1.hand.length === 0 || this.player2.hand.length === 0) {
      gameWinSlap();
    } else if (topCard && "jack" === topCard.value) {
      this.winTurn(player, "slapjack");
    } else if (topCard && secondCard && topCard.value === secondCard.value) {
      this.winTurn(player, "double");
    } else if (topCard && thirdCard && topCard.value === thirdCard.value) {
      this.winTurn(player, "sandwich");
    } else {
      this.badSlap(player);
    }
  }

  winTurn(player, header) {
    for (var i = 0; i < this.centerPile.length; i++) {
      player.hand.push(this.centerPile[i]);
    }
    this.centerPile = [];
    this.shuffleCards(player.hand);
    this.header = header;
  }

  badSlap(player) {
    var opponent = player.id === 1 ? this.player2 : this.player1;
    var lostCard = player.hand.pop();
    opponent.hand.unshift(lostCard);
    this.header = "badSlap";
  }

// check win conditions
  gameWinSlap() {
    if (this.currentPlayer === true) {
      this.currentPlayer === true;
    } else {
      this.currentPlayer === false;
    }
    var winningPlayer = this.currentPlayer ? this.player1 : this.player2;
    var losingPlayer = this.currentPlayer ? this.player2 : this.player1;
    var topCard = this.centerPile[this.centerPile.length - 1];
    if ((topCard.value === "jack" && winningPlayer.slapPile) ||
        (topCard.value != "jack") && losingPlayer.slapPile) {
          // ^^ find which player is slapping
        this.gameOver(winningPlayer);
    } else if (topCard.value === "jack" && losingPlayer.slapPile) {
      this.winTurn(losingPlayer);
    }
    // } else if ()
  }

// turn off currentPlayer switching,
// if player w cards deals all cards and none are jack, thatPlayer.hand.push(this.centerPile);

// end game
  gameOver(winner) {
    winner.wins.push(game);
    winner.saveWinsToStorage();
    this.player1.hand.length === 0;
    this.player2.hand.length === 0;
    this.deal();
  }

}
