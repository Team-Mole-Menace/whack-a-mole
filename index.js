
document.getElementById('submit').addEventListener('click', () => {
    let player = document.getElementById('player').value;
    if(player === '') {
        alert('Please enter a name');
        return;
    }
    localStorage.clear();
    localStorage.setItem('name', JSON.stringify(player));
    window.location.replace('game.html');
});