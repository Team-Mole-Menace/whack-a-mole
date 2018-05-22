/* exported Mole */

const maxInactiveDuration = 5; // the maximum number of seconds a mole will stay in its hole
const activeDuration = 1; // the number of seconds a mole will be clickable

const moleTemplate = document.getElementById('mole-template').content;
const rootElement = document.getElementById('section-mole-board');

class Mole {

    constructor(handleMoleIsWhacked) {
        this.handleMoleIsWhacked = handleMoleIsWhacked;
        this.moleIsActive = false;
    }

    render() {
        const dom = moleTemplate.cloneNode(true);
        this.imageElement = dom.querySelector('img');
        this.imageElement.addEventListener('mousedown', () => {
            if(this.moleIsActive) {
                this.handleMoleIsWhacked();
                this.renderHit();
            }
        });
        rootElement.appendChild(this.imageElement);
        this.renderInactive();
    }

    renderInactive() {
        const duration = getRandomInt(maxInactiveDuration);
        this.imageElement.src = 'images/hole.png';
        this.moleIsActive = false;
        setTimeout(() => {
            this.renderActive();
        }, duration * 1000);
    }

    renderHit() {
        this.imageElement.src = 'images/mole-hit.png';
        this.moleIsActive = false;
        setTimeout(() => {
            this.renderInactive();
        }, 500);
    }


    renderActive() {
        this.imageElement.src = 'images/mole.png';
        this.moleIsActive = true;
        setTimeout(() => {
            this.renderInactive();
        }, activeDuration * 1000);
    }


}

// copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
