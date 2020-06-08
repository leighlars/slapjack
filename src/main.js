var game = new Game();

window.onload = game.deal();
// window.onload = player.retrieveWinsFromStorage();
document.addEventListener("keydown", keyHandler);
// document.addEventListener("keyup", updateDisplay);

function keyHandler(event) {
  if (event.keyCode === 81 && game.currentPlayer === true) {
    game.player1.playCard();
    changeTopCard();
  }
  if (event.keyCode === 80 && game.currentPlayer === false) {
    game.player2.playCard();
    changeTopCard();
  }
  if (event.keyCode === 70) {
    game.slapPile(game.player1);
  }
  if (event.keyCode === 74) {
    game.slapPile(game.player2);
  }
  setTimeout(updateDisplay, 1000);
}

function updateDisplay() {
  var currentPlayer = game.currentPlayer ? game.player1 : game.player2;
  var opponent = game.currentPlayer ? game.player2 : game.player1;
  changeHeader(game.header, currentPlayer, opponent);
  hideCards();
  var winner = currentPlayer.hand.length === 52 ? currentPlayer : opponent;
  // if (game.header === "win") {
//     updatePlayerWinsText(winner);
//     setTimeout(changeHeader, 500);
//     setTimeout(game.resetGame, 500);
//   }
}

function changeTopCard() {
  var playedCard = game.centerPile[game.centerPile.length - 1];
  var topCard = document.querySelector(".center-pile");
  topCard.classList.remove("hidden");
  topCard.style.backgroundImage = `url(${playedCard.src})`;
  game.currentPlayer ? topCard.classList.remove("p2") : topCard.classList.add("p2");
}

function hideCards() {
  var centerPile = document.querySelector(".center-pile");
  var p1Hand = document.querySelector(`.p1-hand`);
  var p2Hand = document.querySelector(`.p2-hand`);
  var decksHTML = [centerPile, p1Hand, p2Hand];
  var decks = [game.centerPile, game.player1.hand, game.player2.hand];
  for (var i = 0; i < decks.length; i++) {
    if (decks[i].length === 0) {
      decksHTML[i].classList.add("hidden");
    } else {
      decksHTML[i].classList.remove("hidden");
    }
  }
}

function changeHeader(condition, winningPlayer, losingPlayer) {
  var header = document.querySelector("header");
  if (condition === "win") {
      header.innerText = `Player ${winningPlayer.id} wins!`;
      updatePlayerWinsText(winningPlayer);
  }
  else if (condition === "slapjack") {
      header.innerText = `SLAPJACK! Player ${winningPlayer.id} takes the pile!`;
  }
  else if (condition === "sandwich") {
      header.innerText = `SANDWICH! Player ${winningPlayer.id} takes the pile!`;
  }
  else if (condition === "double") {
      header.innerText = `DOUBLE! Player ${winningPlayer.id} takes the pile!`;
  }
  else if (condition === "badSlap") {
      header.innerText = `BAD SLAP! Player ${losingPlayer.id} forfeits a card to Player ${winningPlayer.id}!`;
  }
}

function updatePlayerWinsText(winningPlayer) {
  var playerWins = document.querySelector(`.p${winningPlayer.id}-text`);
  playerWins.innerText = `${winningPlayer.wins.length} wins`;
}
