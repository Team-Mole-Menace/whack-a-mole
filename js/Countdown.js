/* exported Countdown */
/* globals */

const scoreTimerTemplate = document.getElementById('score-timer-template');

class Countdown {

    constructor(duration, timeExpired) {
        this.duration = 30;
        this.timeExpired = timeExpired;
        const tempTime = new Date();
        this.startTime = tempTime.getSeconds();
    }

    update() {
        this.timer = setInterval(() => {
            const tempTime = new Date();
            let currentTime = tempTime.getSeconds();
            if(currentTime - this.startTime < 0) {
                this.aboveSixty = true;
            }
            if(this.aboveSixty) {
                currentTime += 60;
            }
            if((currentTime - this.startTime) > this.duration) {
                this.timeExpired();
            }
            else {
                this.countdown.textContent = this.duration - (currentTime - this.startTime) + 'sec';
            }
            console.log('cur', currentTime, 'start', this.startTime);
        }, 1000);
    }

    render() {
        const dom = scoreTimerTemplate.content;

        const scoreSpots = dom.querySelectorAll('span');
        this.countdown = scoreSpots[2];

        this.update();
        

        dom.appendChild(this.countdown);

        return dom;
    }
}
