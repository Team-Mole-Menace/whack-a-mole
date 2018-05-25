/* exported GameApp */
/* globals Countdown Moles Game */

const gameAppTemplate = document.getElementById('game-app-template');

// gameApp is instantiated and rendered in game.js
class GameApp {

    constructor() {
        this.name = JSON.parse(localStorage.getItem('name'));
        this.moleQty = parseInt(JSON.parse(localStorage.getItem('moleQty')));
        this.difficulty = JSON.parse(localStorage.getItem('difficulty'));
        this.score = 0;
        this.duration = 30; // play a 30 second game    
        this.totalClicks = 0;
        this.goodHits = 0; // used to calculate accuracy
    }

    // pushes current game to history
    updateHistory() {
        history.push(this.current);
        history.sort((a, b) => b.score - a.score);
        // limit leaderboard length to 10 items
        if (history.length > 10) {
            history.length = 10;
        } 
        localStorage.setItem('history', JSON.stringify(history));
    }

    startGame() {
        // start a countdown clock
        this.Countdown = new Countdown(this.duration, () => {
            // this function is called when the countdown has expired and game is over
            var accuracy = 0;
            if(this.totalClicks !== 0) {
                accuracy = Math.round(this.goodHits / this.totalClicks * 100);
            }
            // store game data
            const currentGame = new Game(this.name, this.score, accuracy.toString() + '%');
            this.current = currentGame;
            localStorage.setItem('currentGame', JSON.stringify(currentGame));
            this.updateHistory();
            // move to leaderboard
            clearInterval(this.Countdown.timer);
            window.location.replace('leaderboard.html');
        });
        this.sectionScoreTimer.appendChild(this.Countdown.render());

        // create the required quantity of moles
        for(let i = 0; i < this.moleQty; i++) {
            this.Moles = new Moles(this.difficulty, (moleIsGood) => {
                // This function is called when the mole is whacked
                if(moleIsGood) {
                    this.score++;
                    this.goodHits++; 
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

        // add event listener to mole board to record total clicks
        this.sectionMoleBoard.addEventListener('mousedown', (event) => {
            event.preventDefault();
            this.totalClicks++;
        });

        // set the user name and the initial score
        this.sectionScoreTimer.querySelectorAll('span')[0].textContent = this.name;
        this.updateScore();
    }

    // updates the score on the screen as the user is playing
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