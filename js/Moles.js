/* exported Moles */
/* globals Mole */

const moleTemplate = document.getElementById('mole-template');

class Moles {

    constructor(difficulty, moleIsWhacked) {
        this.moleIsWhacked = moleIsWhacked;
        this.difficulty = difficulty;
    }

    render() {
        const dom = moleTemplate.content.cloneNode(true);
        const moleImageTag = dom.querySelector('img');
        const newMole = new Mole(moleImageTag, this.difficulty, this.moleIsWhacked);
        newMole.render();
        return dom;
    }
}