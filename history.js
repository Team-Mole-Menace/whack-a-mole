/* globals Game */

class Game {
    constructor(playerName,score) {
        this.playerName = playerName;
        this.score = score;
        this.accuracy = function() {
            Math.round(this.score.accuracy) 
        } 
    }
}

var History = [];

let game1 = new Game ('Bill Gates', 123, 0);
let game2 = new Game ('Warren Buffet', 250, 0);
let game3 = new Game ('Jeff Bezos', 345, 0);
