/* exported GameApp */
/* globals Countdown */

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {

    constructor() {
        this.name = 'hello world';
        this.score = 0;
    }

    startGame() {
        this.Countdown = new Countdown(this.duration, () => {
            // this function is called when the countdown has expired and game is over
            clearInterval(this.Countdown.timer);
        });
        this.sectionScoreTimer.appendChild(this.Countdown.render());
        // Create some moles
    }

    updateTimer() {

    }

    render() {
        // create dom for timer/score and board
        const dom = gameAppTemplate.content;
        this.sectionScoreTimer = dom.getElementById('section-score-timer');
        this.sectionMoleBoard = dom.getElementById('section-mole-board');

        this.startGame();

        dom.appendChild(this.sectionMoleBoard);
        dom.appendChild(this.sectionScoreTimer);

        return dom;
    }
}