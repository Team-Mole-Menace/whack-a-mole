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
        this.Countdown = new Countdown(this.duration, () => {
            // Store score in localStorage
            // Redirect to leaderboard.html
        });
        this.sectionScoreTimer.appendChild(this.Countdown.render());
        // this.Moles = new Moles();
        console.log('section', this.sectionScoreTimer);
    }

    render() {
        const dom = gameAppTemplate.content;

        this.sectionScoreTimer = dom.getElementById('section-score-timer');
        // const sectionMoleBoard = dom.getElementById('section-mole-board');

        this.startGame();

        console.log('this section', this.sectionScoreTimer);

        dom.appendChild(this.sectionScoreTimer);
        // dom.appendChild(sectionMoleBoard);

        console.log('dom', dom);

        return dom;
    }
}