/* exported App */
/* globals Countdown */

const gameAppTemplate = document.getElementById('game-app-template');
const duration = 30000;
const name = 'hello world';

class App {

    constructor(/* name, duration */) {
        this.name = name;
        this.duration = duration;
        this.score = 0;
    }

    startGame() {
        this.ScoreTimer = new Countdown(this.duration, () => {
            // Store score in localStorage
            // Redirect to leaderboard.html
        });
        this.ScoreTimer.render();
        // this.Moles = new Moles();
    }

    render() {
        const dom = gameAppTemplate.content;

        const sectionScoreTimer = dom.getElementById('section-score-timer');
        const sectionMoleBoard = dom.getElementById('section-mole-board');

        this.startGame();

        dom.appendChild(sectionScoreTimer);
        dom.appendChild(sectionMoleBoard);

        return dom;
    }
}