class Game {
  constructor() {
    this.player1 = new Player(1);
    this.player2 = new Player(2);
    this.deck = [];
  }

  shuffleDeck() {
    for (var i = this.deck.length — 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }

}


A Game should include:
// Two Player instances
// An array of all the possible cards
A way to shuffle the deck-- func called shuffle that randomizes the order of elems in the array?
A way to keep track of the central pile of cards the players will add to
A way to deal the deck out to the players
A way to keep track of which player’s turn it currently is
A way for a player to deal a card into the middle pile
A way for players to attempt slapping the pile with varying outcomes (“legal” slaps are Jacks, doubles, and sandwiches - see the playthrough video for further explanation)
A way to update a player’s wins count
A way to reset the deck and players to play a new game when one is won
