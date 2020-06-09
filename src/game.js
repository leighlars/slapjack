class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.deck = cards;
    this.centerPile = [];
    this.currentPlayer = true;
    this.header = "";
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
    this.player1.hand = this.deck.slice(0, 26);
    this.player2.hand = this.deck.slice(26, 53);
  }

  playerTurn() {
    this.currentPlayer = !this.currentPlayer;
  }

  slapPile(player) {
    var topCard = this.centerPile[0];
    var secondCard = this.centerPile[1];
    var thirdCard = this.centerPile[2];
    if (this.player1.hand.length === 0 || this.player2.hand.length === 0) {
      this.gameWinSlap(player);
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
    player.hand = player.hand.concat(this.centerPile);
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

  gameWinSlap(player) {
    var winningPlayer = this.currentPlayer ? this.player1 : this.player2;
    var losingPlayer = this.currentPlayer ? this.player2 : this.player1;
    var topCard = this.centerPile[0];
    if ((topCard.value === "jack" && winningPlayer.id === player.id) ||
        (topCard.value != "jack") && losingPlayer.id === player.id) {
        this.header = "win";
        this.gameOver(winningPlayer);
    } else if (topCard.value === "jack" && losingPlayer.id === player.id ||
              topCard.value != "jack" && winningPlayer.id === player.id) {
                this.winTurn(losingPlayer);
    }
  }

  gameOver(winner) {
    winner.wins++;
    winner.saveWinsToStorage();
    this.player1.hand.length = 0;
    this.player2.hand.length = 0;
    this.centerPile.length = 0;
    this.deal();
  }

}
