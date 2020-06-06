var game = new Game();

window.onload = game.deal();
// window.onload = player.retrieveWinsFromStorage();
document.addEventListener("keydown", keyHandler);

function keyHandler(event) {
  if (event.keyCode === 81 || event.keyCode === 80) {
    player.playCard();
  }
  if (event.keyCode === 70 || event.keyCode === 74) {
    game.slapPile();
  }
  // is event.key the right name/method?
}

function changeTopCard(playedCard) {
  var topCard = document.querySelector(".center-pile");
  topCard.classList.remove("hidden");
  topCard.style.background = cards.find(card => card === playedCard);
  game.currentPlayer ? topCard.classList.remove("p2") : topCard.classList.add("p2");
}

function hideHand() {
    document.querySelector(`.p${losingPlayer.id}-hand`).classList.add("hidden");
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
