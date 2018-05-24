//  PURPLE RAIN, PURPLE RAAIINN!!!
{
    var dropCount = 40;
    var temp = document.createDocumentFragment();
    for(var r = 0; r < dropCount; r++) {
        console.log('making rain');

        var randomX = Math.round(Math.random() * 75) + 10;
        var randomY = Math.round(Math.random() * 50);
        var randomD = Math.round(Math.random() * 30) + 60;
        console.log(randomX, ' ', randomY);

        var rain = document.createElement('span');
        rain.id = 'rain';
        rain.style = 'left: ' + randomX + '%; width: 3px; top: -1000px;';
        rain.style.setProperty('animation-delay', randomY + '00ms');
        rain.style.setProperty('animation-duration', randomD + '00ms');
        rain.innerHTML = '<img src="images/mole-drop.png">';
        rain.querySelector('img').style.width = parseInt(Math.random() * 100) + 10 + 'px';
        console.log(rain);
        temp.appendChild(rain);
    }
    document.body.appendChild(temp);
}