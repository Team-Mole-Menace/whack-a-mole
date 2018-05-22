/* globals ReportTable history*/

initHistory();
const app = new ReportTable(history);
const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);