var game = new Game();

window.onload = game.deal();
// window.onload = player.retrieveWinsFromStorage();
document.addEventListener("keydown", keyHandler);

function keyHandler(event) {
  var slapper = null;
  if (event.key === "q" && game.currentPlayer === true) {
    document.querySelector("h1").innerText = "";
    game.player1.playCard();
    changeTopCard();
  }
  if (event.key === "p" && game.currentPlayer === false) {
    document.querySelector("h1").innerText = "";
    game.player2.playCard();
    changeTopCard();
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
  // header lasts for half a second
}

function updateDisplay(slapper) {
  hideCards();
  if (slapper) {
    var opponent = slapper.id === 1 ? game.player2 : game.player1;
    changeHeader(game.header, slapper);
    var winner = slapper.hand.length === 52 ? slapper : opponent;
  }
  if (game.header === "win") {
    updatePlayerWinsText(winner);
    // should this be outside of for loop?
  }
}

function changeTopCard() {
  var playedCard = game.centerPile[0];
  var topCard = document.querySelector(".center-pile");
  topCard.classList.remove("hidden");
  topCard.style.backgroundImage = `url(${playedCard.src})`;
  game.currentPlayer ? topCard.classList.add("p2") : topCard.classList.remove("p2");
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
      // ^^ not hiding empty hands
    }
  }
}

function changeHeader(condition, slapper) {
  var header = document.querySelector("h1");
  header.classList.add("gameplay");
  if (condition === "win") {
    header.innerText = `Player ${slapper.id} wins!`;
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
  playerWins.innerText = `${winningPlayer.wins.length} wins`;
}
