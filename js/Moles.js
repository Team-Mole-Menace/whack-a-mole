/* exported Moles */
/* globals Mole */

const moleTemplate = document.getElementById('mole-template');

class Moles {

    constructor(moleIsWhacked) {
        this.moleIsWhacked = moleIsWhacked;
     //   this.score = 0;
    }

    render() {
        const dom = moleTemplate.content.cloneNode(true);
        this.moleImageTag = dom.querySelector('img');
        const newMole = new Mole(this.moleImageTag, this.moleIsWhacked);
        newMole.render();
        return dom;
    }
}