/* exported Moles */
/* globals Mole */
const moleTemplate = document.getElementById('mole-template');

class Moles {

    constructor(moleIsWhacked) {
        this.moleIsWhacked = moleIsWhacked;
        this.score = 0;
    }

    render() {
        const dom = moleTemplate.content.cloneNode(true);
        this.mole = dom.querySelector('img');
        const newMole = new Mole(this.mole, this.moleIsWhacked);
        newMole.render();
        return dom;
    }
}