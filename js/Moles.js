/* exported Moles */
/* globals Mole */
const moleTemplate = document.getElementById('mole-template');

class Moles {

    constructor(chance, moleIsWhacked) {
        this.moleIsWhacked = moleIsWhacked;
        this.score = 0;
        this.chance = chance;
    }

    render() {
        const dom = moleTemplate.content.cloneNode(true);
        this.mole = dom.querySelector('img');
        const newMole = new Mole(this.mole, this.moleIsWhacked, this.chance);
        newMole.render();
        return dom;
    }
}