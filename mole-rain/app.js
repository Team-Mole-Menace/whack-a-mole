//  PURPLE RAIN, PURPLE RAAIINN!!!
{
    var dropCount = 30;
    var temp = document.createDocumentFragment();
    for(var r = 0; r < dropCount; r++) {
        console.log('making rain');

        var randomX = Math.round(Math.random() * 50) + 25;
        var randomY = Math.round(Math.random() * 50);
        var randomD = Math.round(Math.random() * 30) + 60;
        console.log(randomX, ' ', randomY);

        var rain = document.createElement('span');
        rain.id = 'rain';
        rain.style = 'left: ' + randomX + '%; width: 3px; top: -1000px;';
        rain.style.setProperty('animation-delay', randomY + '00ms');
        rain.style.setProperty('animation-duration', randomD + '00ms');
        rain.innerHTML = '<img src="mole-rain/mole-drop.png">';
        // rain.style.setProperty('background', 'linear-gradient(black, rgb(' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')');
        console.log(rain);
        temp.appendChild(rain);
    }
    document.body.appendChild(temp);
}

// {
//     var flood = document.createElement('span');
//     flood.id = 'flood';
//     // flood.textContent = ' ';
//     flood.style.setProperty('animation', 'flood 5s normal');
//     setTimeout(() => {
//         document.body.appendChild(flood);
//     }, 100);
// }
