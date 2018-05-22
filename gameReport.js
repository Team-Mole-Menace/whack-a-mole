/* exported GameReport */

const gameReportTemplate = document.getElementById('row-table-template').content;

class GameReport {
    constructor(game) {
        this.game = game;
    }

    render() {
        const dom = gameReportTemplate.cloneNode(true);
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.game.name;
        columns[1].textContent = this.game.score;
        columns[2].textContent = '0 %'; 
        return dom;
    }
   
}
