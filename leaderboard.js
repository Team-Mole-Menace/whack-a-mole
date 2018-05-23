/* globals LeaderboardApp history*/

const app = new LeaderboardApp();

document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.replace('index.html');
});

const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);