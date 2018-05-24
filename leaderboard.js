/* globals LeaderboardApp history*/

const app = new LeaderboardApp();

// when clicked, this button event returns the user to the main screen to play again
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    window.location.replace('index.html');
});

const dom = app.render();
const root = document.getElementById('root');
root.appendChild(dom);