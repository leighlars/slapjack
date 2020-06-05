class Player {
  constructor(id) {
    this.id = id;
    this.wins = 0;
    this.hand = [];

  }

  playCard() {

  }

  saveWinsToStorage() {
   localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins));
 }

 retrieveWinsFromStorage() {
   this.wins = JSON.parse(localStorage.getItem(`player-${this.id}-wins`)) || [];
   // updatePlayerWinsText(this);
 }


}
