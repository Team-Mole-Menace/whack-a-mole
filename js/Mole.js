/* exported Mole */

class Mole {

    constructor(moleImageTag, difficulty, handleMoleIsWhacked) {
        this.moleImageTag = moleImageTag;
        this.difficulty = difficulty
        this.handleMoleIsWhacked = handleMoleIsWhacked;
        this.moleIsGood = true;
        
        switch(this.difficulty) {
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
            // when mole is clicked, alert parent function and render mole as hit
            if(this.moleIsActive) {
                this.handleMoleIsWhacked(this.moleIsGood);
                this.renderHit();
            }
        });
        this.renderInactive();
    }

    renderInactive() {
        this.moleImageTag.src = 'images/hole.png';
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
        this.moleIsActive = false;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.renderInactive();
        }, 500);
    }

    renderActive() {
        // use random to determine if this will be a good mole or a bad mole
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

        this.moleIsActive = true;
        clearTimeout(this.timeOut);
        this.timeOut = setTimeout(() => {
            this.renderInactive();
        }, this.activeDuration());
    }
}