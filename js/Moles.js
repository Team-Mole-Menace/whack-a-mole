/* exported Moles */
/* globals Mole */

const totalMoles = 5;


class Moles {

    constructor() {
        this.score = 0;
    
    }
  
    render() {
        for(let i = 0; i < totalMoles; i++) {
            const newMole = new Mole(() => {
                // this function runs when mole is whacked
                this.score++;
            });
            //const newMole = new Mole(this.score);
            newMole.render();
        }
    }



}

const myMoles = new Moles;
myMoles.render();