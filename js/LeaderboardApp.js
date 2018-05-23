/* globals CurrentScore ReportTable */
/* exported LeaderboardApp */

const leaderBoardTemplate = document.getElementById('leader-board-template');

class LeaderboardApp {

    constructor() {
        this.current = JSON.parse(localStorage.getItem('currentGame'));
        // // this.history = localStorage.getItem('history');
    }

    render() {
        const dom = leaderBoardTemplate.content;
        const currentScoreSection = dom.getElementById('current-score-section');
        const highScoresSection = dom.getElementById('high-scores-section');

        const Current = new CurrentScore(this.current);
        const Table = new ReportTable(history);

        currentScoreSection.appendChild(Current.render());
        highScoresSection.appendChild(Table.render());

        dom.appendChild(currentScoreSection);
        dom.appendChild(highScoresSection);

        return dom;
    }
}
