/* exported Moles */
/* globals Mole */
const moleTemplate = document.getElementById('mole-template');

class Moles {

    constructor(difficulty, moleIsWhacked) {
        this.moleIsWhacked = moleIsWhacked;
        this.score = 0;
        this.difficulty = difficulty;
    }

    render() {
        const dom = moleTemplate.content.cloneNode(true);
        this.mole = dom.querySelector('img');
        const newMole = new Mole(this.mole, this.moleIsWhacked, this.difficulty);
        newMole.render();
        return dom;
    }
}