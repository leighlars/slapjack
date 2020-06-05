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
//
// }

//function updatePlayerWinsText() {
//
// }
