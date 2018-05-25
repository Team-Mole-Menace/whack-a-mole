/* globals CurrentScore ReportTable */
/* exported LeaderboardApp */

const leaderBoardTemplate = document.getElementById('leader-board-template');

class LeaderboardApp {

    constructor() {
        this.current = JSON.parse(localStorage.getItem('currentGame'))
    }

    render() {
        const dom = leaderBoardTemplate.content;
        const currentScoreSection = dom.getElementById('current-score-section');
        const highScoresSection = dom.getElementById('high-scores-section');

        const current = new CurrentScore(this.current);
        const table = new ReportTable(history);

        currentScoreSection.appendChild(current.render());
        highScoresSection.appendChild(table.render());

        dom.appendChild(currentScoreSection);
        dom.appendChild(highScoresSection);

        return dom;
    }
}
