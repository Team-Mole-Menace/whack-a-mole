/* globals ReportRow */
/* exported ReportTable */

const leaderboardReportTemplate = document.getElementById('rpt-table-template');

class ReportTable {
    constructor(history) {
        this.history = history;
    }

    render() {
        const dom = leaderboardReportTemplate.content;
        const tableBody = dom.querySelector('tbody');
        for(let i = 0; i < this.history.length; i++) {
            const row = new ReportRow(this.history[i]);
            tableBody.appendChild(row.render());
        }
        return dom;
    }
} 
