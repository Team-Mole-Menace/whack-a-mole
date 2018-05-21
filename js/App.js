/* exported App */
/* globals Countdown */

const root = document.getElementById('root');
const gameAppTemplate = document.getElementById('game-app-template');
const duration = 30000;
const name = 'hello world';

class App {

    constructor(name) {
        this.name = name;
    //    this.duration =  duration is used only by timer.  Not necessary in app.
        this.score = 0;
    }

    startGame() {
        this.ScoreTimer = new Countdown(this.duration, () => {
            // this function is called when the countdown has expired and game is over
            // Store score in localStorage
            // Redirect to leaderboard.html
        });
        this.ScoreTimer.render();
        // this.Moles = new Moles();
    }

    render() {
        // create dom for timer/score and board
        const dom = gameAppTemplate.content;
        const sectionScoreTimer = dom.getElementById('section-score-timer');
        const sectionMoleBoard = dom.getElementById('section-mole-board');
        dom.appendChild(sectionScoreTimer);
        dom.appendChild(sectionMoleBoard);
        // append dom to root
        root.appendChild(dom);

        // start game
     //   this.startGame();
    }
}