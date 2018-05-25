{
    var dropCount = 40;
    var temp = document.createDocumentFragment();
    for(var r = 0; r < dropCount; r++) {

        var randomX = Math.round(Math.random() * 75) + 10;
        var randomY = Math.round(Math.random() * 50);
        var randomD = Math.round(Math.random() * 30) + 60;

        var rain = document.createElement('span');
        rain.id = 'rain';
        rain.style = 'left: ' + randomX + '%; top: -1000px;';
        rain.style.setProperty('animation-delay', randomY + '00ms');
        rain.style.setProperty('animation-duration', randomD + '00ms');
        rain.innerHTML = '<img src="images/mole-drop.png">';
        rain.querySelector('img').style.width = parseInt(Math.random() * 100) + 10 + 'px';
        temp.appendChild(rain);
    }
    document.body.appendChild(temp);
}