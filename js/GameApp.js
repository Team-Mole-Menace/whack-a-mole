/* exported GameApp */
/* globals Countdown Moles */

const gameAppTemplate = document.getElementById('game-app-template');

class GameApp {

    constructor() {
        this.name = JSON.parse(localStorage.getItem('name'));
        this.score = 0;
        this.moleQty = parseInt(JSON.parse(localStorage.getItem('moleQty')));
        this.chance = 10;
        this.duration = 30;
    }

    startGame() {
        this.Countdown = new Countdown(this.duration, () => {
            // this function is called when the countdown has expired and game is over
            localStorage.setItem('currentScore', JSON.stringify({ name: this.name, score: this.score }));
            clearInterval(this.Countdown.timer);
            window.location.replace('leaderboard.html');
        });
        this.sectionScoreTimer.appendChild(this.Countdown.render());
        for(let i = 0; i < this.moleQty; i++) {
            this.Moles = new Moles(this.chance, (moleIsGood) => {
                // This function is called when the mole is whacked
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
        this.sectionScoreTimer.querySelectorAll('span')[0].textContent = this.name;
        this.updateScore();
    }

    updateScore() {
        this.sectionScoreTimer.querySelectorAll('span')[1].textContent = this.score + 'pts';
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