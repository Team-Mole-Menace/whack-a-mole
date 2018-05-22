
document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault();
    // get values from form
    let player = document.getElementById('player').value;
    let qty = document.getElementById('moleQty').value;
    let difficulty = document.getElementById('difficulty').value;
    // test player name input
    if(player === '') {
        alert('Please enter a name');
        return;
    }
    // write values to storage
    localStorage.setItem('name', JSON.stringify(player));
    localStorage.setItem('moleQty', JSON.stringify (qty));
    localStorage.setItem('difficulty', JSON.stringify (difficulty));
    // open the next window
    window.location.replace('game.html');
});