/* globals */
/* exported HighScores */
const highScoresTemplate = document.getElementById('high-scores-template');

class HighScores {

    constructor(history, current) {
        this.history = history;
        this.current = current;
    }

    updateScores() {
        console.log('history', this.history, 'typeof', typeof(this.history));
        // this.history.push(this.current);
        console.log('history is', this.history);

    }

    render() {
        const dom = highScoresTemplate.content;
        const table = dom.querySelector('tbody');

        this.updateScores();

        for(let i = 0; i < 10; i++) {
            const row = table.querySelector('row').cloneNode(true);
            const currentPlayer = JSON.parse(this.history[i]);
            for(let j = 0; j < currentPlayer.length; j++) {
                const td = row.createElement('td');
                td.textContent = currentPlayer[j];
            }
        }

        return dom;
    }
}