var game = new Game();

// window.onload = player.retrieveWinsFromStorage();
document.addEventListener("keydown", keyHandler);

function keyHandler() {
  if (event.key === 81) {
    game.player1.playCard();
  }
  if (event.key === 70) {
    game.player1.slapPile();
  }
  if (event.key === 80) {
    game.player2.playCard();
  }
  if (event.key === 74 ) {
    game.player2.slapPile();
  }
}

game.shuffleDeck(game.deck);

game.deal();


function changeTopCard() {
  var topCard = document.querySelector(".central-pile");
  topCard.classList.remove("hidden");
  if (this.player2.playCard()) {
    topCard.classList.add("p2");
    // topCard.style.background = image of index
  }
  // add border of player's color
  //
}

function displayTopCard(playedCard) {
  var topCard = document.querySelector(".central-pile");
  topCard.
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
  else if (condition === "badslap") {
      header.innerText = `BAD SLAP! Player ${winningPlayer.id} forfeits a card to Player ${otherPlayer}!`;
  }
}

function updatePlayerWinsText(winningPlayer) {
  var playerWins = document.querySelector(`.p${winningPlayer.id}-text`);
  playerWins.innerText = `${winningPlayer.wins.length} wins`;
}
