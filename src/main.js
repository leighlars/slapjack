var game = new Game();

window.onload = game.deal();
window.onload = updatePlayerWinsText(game.player1);
window.onload = updatePlayerWinsText(game.player2);
document.addEventListener("keydown", keyHandler);

function keyHandler(event) {
  var slapper = null;
  if (event.key === "q" && game.currentPlayer === true) {
    game.player1.playCard();
    gameplayDOM();
  }
  if (event.key === "p" && game.currentPlayer === false) {
    game.player2.playCard();
    gameplayDOM();
  }
  if (event.key === "f") {
    game.slapPile(game.player1);
    slapper = game.player1;
  }
  if (event.key === "j") {
    game.slapPile(game.player2);
    slapper = game.player2;
  }
  updateDisplay(slapper);
}

function gameplayDOM() {
  document.querySelector("h1").innerText = "";
  changeTopCard();
}

function updateDisplay(slapper) {
  hideCards();
  if (slapper) {
    var opponent = slapper.id === 1 ? game.player2 : game.player1;
    changeHeader(game.header, slapper);
    var winner = slapper.hand.length === 52 ? slapper : opponent;
    if (game.header === "win") {
      updatePlayerWinsText(winner);
    }
  }
}

function changeTopCard() {
  var topCard = document.querySelector(".center-pile");
  if (game.centerPile.length > 0) {
    var playedCard = game.centerPile[0];
    topCard.classList.remove("hidden");
    topCard.style.backgroundImage = `url(${playedCard.src})`;
  }
  var opponent = game.currentPlayer ? game.player2 : game.player1;
  if (opponent.hand.length != 0) {
    game.currentPlayer && opponent.hand.length != 0  ? topCard.classList.add("p2") : topCard.classList.remove("p2");
  }
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

function changeHeader(condition, slapper) {
  var header = document.querySelector("h1");
  header.classList.add("gameplay");
  if (condition === "1" || condition === "2") {
    header.innerText = `Player ${condition} wins!`;
    updatePlayerWinsText(slapper);
  } else if (condition === "slapjack") {
    header.innerText = `SLAPJACK! Player ${slapper.id} takes the pile!`;
  } else if (condition === "sandwich") {
    header.innerText = `SANDWICH! Player ${slapper.id} takes the pile!`;
  } else if (condition === "double") {
    header.innerText = `DOUBLE! Player ${slapper.id} takes the pile!`;
  } else if (condition === "badSlap") {
    var opponentID = slapper.id === 1 ? 2 : 1;
    header.innerText = `BAD SLAP! Player ${slapper.id} forfeits a card to Player ${opponentID}!`;
  }
}

function updatePlayerWinsText(winningPlayer) {
  var playerWins = document.querySelector(`.p${winningPlayer.id}-text`);
  playerWins.innerText = `${winningPlayer.wins} wins`;
}
