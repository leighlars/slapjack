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

  gameWinSlap() {
    var winningPlayer = this.currentPlayer ? this.player1 : this.player2;
    var losingPlayer = this.currentPlayer ? this.player2 : this.player1;
    var topCard = this.centerPile[0];
    if ((topCard.value === "jack" && winningPlayer.slapPile) ||
        (topCard.value != "jack") && losingPlayer.slapPile) {
          // ^^ find which player is slapping
        this.gameOver(winningPlayer);
    } else if (topCard.value === "jack" && losingPlayer.slapPile ||
              topCard.value != "jack" && winningPlayer.slapPile) {
      this.winTurn(losingPlayer);
    }     // else if (winningPlayer.hand.length)
  }


  // The player with cards left continues to deal from their hand into
  // the central pile (they are now allowed to deal multiple times in a row!)
  // (turn off currentPlayer switching),
  // If the player with cards left deals all their cards into
  // the center without revealing a Jack, the central pile returns
  // to that player’s hand, is shuffled, and the player must continue
  // to deal until a Jack is revealed

  // When a Jack is revealed, the player who is out of cards can slap it.
  // The central pile is then their new hand, the game continues as normal.
  // If however, the player who is out of cards slaps something that is not a Jack,
  //  or if the player who still has cards slaps the Jack first,
  //  then the player who is out of cards loses and the game is over!
  // Doubles and Sandwiches are not valid when one player is
  // completely out of cards - in this case, only a Jack can save them!
  // The only way the player who still has cards can win is by slapping
  // the Jack before the player without cards left does


// if player w cards deals all cards and none are jack, thatPlayer.hand.push(this.centerPile);

  gameOver(winner) {
    winner.wins.push(game);
    winner.saveWinsToStorage();
    this.player1.hand.length === 0;
    this.player2.hand.length === 0;
    this.deal();
  }

}
