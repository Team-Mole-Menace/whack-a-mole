/* exported CurrentScore */
const currentScoreTemplate = document.getElementById('current-score-template');

class CurrentScore {
    constructor(current) {
        this.current = current;
    }

    render() {
        const dom = currentScoreTemplate.content;
        const data = dom.querySelectorAll('span');
        data[1].textContent = this.current.playerName;
        data[2].textContent = this.current.score + 'pts';
        data[3].textContent = this.current.accuracy;

        dom.getElementById('restart').addEventListener('click', (event) => {
            event.preventDefault();
            window.location.replace('index.html');
        });

        return dom;
    }
}