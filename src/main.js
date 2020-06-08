var game = new Game();
var player1 = new Player(1);
var player2 = new Player(2);

window.onload = game.deal();
// window.onload = player.retrieveWinsFromStorage();
document.addEventListener("keydown", keyHandler);

function keyHandler(event) {
  if (event.keyCode === 81) {
    player1.playCard();
  }
  if (event.keyCode === 80) {
    player2.playCard();
  }
  if (event.keyCode === 70) {
    game.slapPile();
  }
  if (event.keyCode === 74) {
    game.slapPile();
  }
}

function changeTopCard(playedCard) {
  var topCard = document.querySelector(".center-pile");
  topCard.classList.remove("hidden");
  topCard.style.backgroundImage = url(playedCard);
  game.currentPlayer ? topCard.classList.remove("p2") : topCard.classList.add("p2");
}

function hideHand() {
  if (game.player1.hand.length === 0) {
    document.querySelector(`.p1-hand`).classList.add("hidden");
  }
  if (game.player2.hand.length === 0) {
    document.querySelector(`.p2-hand`).classList.add("hidden");
  } else {
    document.querySelector(`.p1-hand`).classList.remove("hidden");
    document.querySelector(`.p2-hand`).classList.remove("hidden");
  }
}

function changeHeader(condition, winningPlayer) {
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
      header.innerText = `BAD SLAP! Player ${winningPlayer.id} forfeits a card to Player ${otherPlayer}!`;
  }
}

function updatePlayerWinsText(winningPlayer) {
  var playerWins = document.querySelector(`.p${winningPlayer.id}-text`);
  playerWins.innerText = `${winningPlayer.wins.length} wins`;
}
