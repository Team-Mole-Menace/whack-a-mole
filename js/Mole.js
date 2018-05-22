/* exported Mole */

class Mole {

    constructor(mole, handleMoleIsWhacked, difficulty) {
        this.mole = mole;
        this.inactiveDuration = function() {return parseInt((Math.random() * 1000)) + 1000;};
        this.activeDuration = function() {return parseInt((Math.random() * 1000)) + 500;};
        this.handleMoleIsWhacked = handleMoleIsWhacked;
        this.moleIsGood = true;
        this.difficulty = difficulty;
    }

    render() {
        this.mole.addEventListener('mousedown', () => {
            if(this.moleIsActive) {
                this.handleMoleIsWhacked(this.moleIsGood);
                this.renderHit();
            }
            else {
                return;
            }
        });
        this.renderInactive();
    }

    renderInactive() {
        console.log('active', this.activeDuration(), 'inacttive', this.inactiveDuration());
        const duration = getRandomInt(this.inactiveDuration());
        this.mole.src = 'images/hole.png';
        this.mole.id = 'mole-inactive';
        this.moleIsActive = false;
        this.timeOut = setTimeout(() => {
            this.renderActive();
        }, duration);
    }

    renderHit() {
        if(this.moleIsGood) {
            this.mole.src = 'images/mole-hit.png';
        }
        else {
            this.mole.src = 'images/mole-bad-hit.png';
        }
        this.mole.id = 'mole-hit';
        this.moleIsActive = false;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.renderInactive();
        }, 500);
    }


    renderActive() {
        const temp = parseInt(Math.random() * this.difficulty);
        if(temp === 1) {
            this.moleIsGood = false;
        }
        else {
            this.moleIsGood = true;
        }

        if(this.moleIsGood) {
            this.mole.src = 'images/mole.png';
        }
        else {
            this.mole.src = 'images/mole-bad.png';
        }
        this.mole.id = 'mole-active';
        this.moleIsActive = true;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.renderInactive();
        }, this.activeDuration());
    }
}

// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 500;
}
