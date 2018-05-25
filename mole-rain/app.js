{
    var dropCount = 40;
    var temp = document.createDocumentFragment();
    for(var r = 0; r < dropCount; r++) {

        var randomX = Math.round(Math.random() * 80) + 10; // random position (left to right)
        var randomY = Math.round(Math.random() * 50); // random start time
        var randomD = Math.round(Math.random() * 30) + 60; // random duration 

        var rain = document.createElement('span');
        rain.id = 'rain';
        rain.style = 'left: ' + randomX + '%; top: -1000px;';
        rain.style.setProperty('animation-delay', randomY + '00ms');
        rain.style.setProperty('animation-duration', randomD + '00ms');
        rain.addEventListener('animationiteration', () => {
            const drip = new Audio('../sounds/drip' + (parseInt(Math.random() * 2) + 1) + '.wav'); // plays sound every time a falling mole restarts
            drip.play();
        });
        rain.innerHTML = '<img src="images/mole-drop.png">';
        rain.querySelector('img').style.width = parseInt(Math.random() * 100) + 10 + 'px'; // random mole size
        temp.appendChild(rain);
    }
    document.body.appendChild(temp);
}