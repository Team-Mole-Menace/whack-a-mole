/* exported Mole */

class Mole {

    constructor(moleImageTag, handleMoleIsWhacked) {
        this.moleImageTag = moleImageTag;
        this.handleMoleIsWhacked = handleMoleIsWhacked;
        this.moleIsGood = true;
        let difficulty = JSON.parse(localStorage.getItem('difficulty'));
        switch(difficulty) {
            case 'easy':
                this.chance = 20; // chance of bad mole is 1 out of 20 (5%)
                this.inactiveDuration = function() {return parseInt((Math.random() * 1000)) + 1000;};
                this.activeDuration = function() {return parseInt((Math.random() * 1000)) + 1000;};
                break;
            case 'medium':
                this.chance = 10;
                this.inactiveDuration = function() {return parseInt((Math.random() * 1000)) + 1000;};
                this.activeDuration = function() {return parseInt((Math.random() * 1000)) + 500;};
                break;
            case 'hard':
                this.chance = 5;
                this.inactiveDuration = function() {return parseInt((Math.random() * 1000)) + 1000;};
                this.activeDuration = function() {return parseInt((Math.random() * 1000)) + 100;};
                break;
        }
    }

    render() {
        this.moleImageTag.addEventListener('mousedown', () => {
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
        this.moleImageTag.src = 'images/hole.png';
        this.moleImageTag.id = 'mole-inactive';
        this.moleIsActive = false;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.renderActive();
        }, this.inactiveDuration());
        console.log ('inactive duration:', this.inactiveDuration())
    }

    renderHit() {
        if(this.moleIsGood) {
            this.moleImageTag.src = 'images/mole-hit.png';
        }
        else {
            this.moleImageTag.src = 'images/mole-bad-hit.png';
        }
        this.moleImageTag.id = 'mole-hit';  // what does this do?
        this.moleIsActive = false;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.renderInactive();
        }, 500);
    }

    renderActive() {
        const temp = parseInt(Math.random() * this.chance);
        if(temp === 1) {
            this.moleIsGood = false;
        }
        else {
            this.moleIsGood = true;
        }

        if(this.moleIsGood) {
            this.moleImageTag.src = 'images/mole.png';
        }
        else {
            this.moleImageTag.src = 'images/mole-bad.png';
        }
        this.moleImageTag.id = 'mole-active'; // and this?
        this.moleIsActive = true;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.renderInactive();
        }, this.activeDuration());
    }
}