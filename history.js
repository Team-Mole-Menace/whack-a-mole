/* exported history Game */

let history;

class Game {
    constructor(playerName, score, accuracy) {
        this.playerName = playerName;
        this.score = score;
        this.accuracy = accuracy;
    }
}
const gameData = window.localStorage.getItem('history');

if(gameData) {
    history = JSON.parse(gameData);
}
else {
    history = [];
}


//  function initHistory() {
    
//     history = [
//         new Game ('Bill Gates', 123, '10%'),
//         new Game ('Warren Buffet', 250, '20%'),
//         new Game ('Jeff Bezos', 345, '35%')
//     ];
    
// }






