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
const storedHistory = window.localStorage.getItem('history');
if(storedHistory) {
    history = JSON.parse(storedHistory);
}
else {
    history = [];
}
