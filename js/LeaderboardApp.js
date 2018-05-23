/* globals CurrentScore HighScores */
/* exported LeaderboardApp */

const leaderBoardTemplate = document.getElementById('leader-board-template');

class LeaderboardApp {

    constructor() {
        this.current = JSON.parse(localStorage.getItem('currentScore'));
        this.history = localStorage.getItem('history');
    }

    updateScores() {

    }

    render() {
        const dom = leaderBoardTemplate.content;
        const currentScoreSection = dom.getElementById('current-score-section');
        const highScoresSection = dom.getElementById('high-scores-section');

        // doThis();

        const Current = new CurrentScore(this.current);
        // const High = new HighScores(this.history, this.current);

        currentScoreSection.appendChild(Current.render());
        // highScoresSection.appendChild(High.render());

        dom.appendChild(currentScoreSection);
        dom.appendChild(highScoresSection);
        return dom;
    }
}

// // Temporary 'history'
// function doThis() {
//     let arr = [];
//     class Obj {
//         constructor(name, score, accuracy) {
//             this.name = name;
//             this.score = score;
//             this.accuracy = accuracy;
//         }
//     }

//     for(let i = 0; i < 10; i++) {
//         const temp = new Obj(i, i, '100%');
//         arr.push(temp);
//     }
//     console.log('array', arr);
//     localStorage.setItem('history', JSON.stringify(arr));
// }