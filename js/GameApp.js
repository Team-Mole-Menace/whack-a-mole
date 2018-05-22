/* exported GameApp */
/* globals Countdown Moles */

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {

    constructor() {
        this.name = JSON.parse(localStorage.getItem('name'));
        this.score = 0;
        this.moles = 5;
        this.difficulty = 10;
    }

    startGame() {
        this.Countdown = new Countdown(this.name, this.score, this.duration, () => {
            // this function is called when the countdown has expired and game is over
            console.log('time expired');
            localStorage.setItem('currentScore', JSON.stringify({ name: this.name, score: this.score }));
            clearInterval(this.Countdown.timer);
            window.location.replace('leaderboard.html');
        });
        this.sectionScoreTimer.appendChild(this.Countdown.render());
        for(let i = 0; i < this.moles; i++) {
            this.Moles = new Moles(this.difficulty, (moleIsGood) => {
                console.log('higher up  mole is good', moleIsGood);
                if(moleIsGood) {
                    this.score++;
                    this.sound = new Audio('./sounds/sound.wav');
                }
                else {
                    this.score--;
                    this.sound = new Audio('./sounds/laugh.wav');
                }
                this.sound.play();
                this.updateScore();
            });
            this.sectionMoleBoard.appendChild(this.Moles.render());
        }
        this.updateScore();
    }

    updateScore() {
        this.sectionScoreTimer.querySelectorAll('span')[1].textContent = this.score;
    }

    render() {
        // create dom for timer/score and board
        const dom = gameAppTemplate.content;
        this.sectionScoreTimer = dom.getElementById('section-score-timer');
        this.sectionMoleBoard = dom.getElementById('section-mole-board');

        this.startGame();

        dom.appendChild(this.sectionScoreTimer);
        dom.appendChild(this.sectionMoleBoard);

        return dom;
    }
}