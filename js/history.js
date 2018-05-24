/* exported history Game */

let history;

class Game {
    constructor(playerName, score, accuracy) {
        this.playerName = playerName;
        this.score = score;
        this.accuracy = accuracy;
    }
}

// if game data exists in storage, get it.  Otherwise, start with an empty history array
const gameData = window.localStorage.getItem('history');
if(gameData) {
    history = JSON.parse(gameData);
}
else {
    history = [];
}
