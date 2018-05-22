/* globals Game */
/* exported history */

// const gameData = window.localStorage.getItem('history');

// window.onbeforeunload = () => {
//     window.localStorage.setItem('history', JSON.stringify(history));
// }
let history;
// if (gameData) {
//     history = JSON.parse(gameData);
// }
// else {
//     initGame();
// }

class Game {
    constructor(playerName,score) {
        this.playerName = playerName;
        this.score = score;
        // this.accuracy = function() {
        //     Math.round(this.score.accuracy) 
    } 
}

 function initHistory() {
    
    history = [
        new Game ('Bill Gates', 123, 0),
        new Game ('Warren Buffet', 250, 0),
        new Game ('Jeff Bezos', 345, 0)
    ];
    
}






