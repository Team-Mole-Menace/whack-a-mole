/* exported Countdown */
/* globals */

const scoreTimerTemplate = document.getElementById('score-timer-template');

class Countdown {

    constructor(duration, timeExpired) {
        this.duration = duration;
        this.timeExpired = timeExpired;
        const tempTime = new Date();
        this.startTime = (tempTime.getHours() * 10000) + (tempTime.getMinutes() * 100) + tempTime.getSeconds()
    }

    update() {
        const tempTime = new Date();
        const currentTime = (tempTime.getHours() * 10000) + (tempTime.getMinutes() * 100) + tempTime.getSeconds();
        if((currentTime - this.startTime) >= this.duration) {
            this.timeExpired();
        }
        else {
            this.countdown.textContent = 30 - (currentTime - this.startTime) + 'sec';
            console.log('countodnw', this.countdown);
        }
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
