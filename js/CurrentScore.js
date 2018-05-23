/* exported CurrentScore */
const currentScoreTemplate = document.getElementById('current-score-template');

class CurrentScore {
    constructor(current) {
        this.current = current;
    }

    render() {
        const dom = currentScoreTemplate.content;
        const data = dom.querySelectorAll('span');
        data[1].textContent = this.current.name;
        data[2].textContent = this.current.score;
        data[3].textContent = this.current.accuracy;
        return dom;
    }
}