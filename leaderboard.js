/* globals LeaderboardApp history*/



const app = new LeaderboardApp();

const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);