var game = new Game();

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

//function displayTopCard() {
//var topCard = document.querySelector(".deck");
// 
// }

// function changeHeader() {
// var header = document.querySelector("header");
// if slapjack, header.innerText = "SLAPJACK! Player ${} takes the pile!";
// if sandwich, header.innerText = "SANDWICH! Player ${} takes the pile!";
// if double, header.innerText = "DOUBLE! Player ${} takes the pile!";
// if bad slap, header.innerText = "BAD SLAP! Player ${} forfeits a card to Player ${otherPlayer}!"
// if win, header.innerText = "Player ${} wins!"

// }

//function updatePlayerWinsText() {
// var playerWins = document.querySelector(".p${winningPlayer.id}-text");
// playerWins.innerText = `${winningPlayer.wins.length} wins`;
// }
