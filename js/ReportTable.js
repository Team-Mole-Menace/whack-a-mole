/* globals ReportRow */
/* exported ReportTable */

const leaderboardReportTemplate = document.getElementById('rpt-table-template');

class ReportTable {
    constructor(history) {
        this.history = history;
    }

    render() {
        const dom = leaderboardReportTemplate.content;
        this.tableBody = dom.querySelector('tbody');
        for(let i = 0; i < this.history.length; i++) {
            const reportComponent = new ReportRow(this.history[i]);
            this.tableBody.appendChild(reportComponent.render());
        }
        return dom;
    }
} 
