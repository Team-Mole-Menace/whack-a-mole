/* exported Countdown */
/* globals */

const scoreTimerTemplate = document.getElementById('score-timer-template');

class Countdown {

    constructor(duration, timeExpired) {
        this.duration = 30;
        this.timeExpired = timeExpired;
        const tempTime = new Date();
        this.startTime = (tempTime.getHours() * 10000) + (tempTime.getMinutes() * 100) + tempTime.getSeconds();
    }

    update() {
        this.timer = setInterval(() => {
            const tempTime = new Date();
            const currentTime = (tempTime.getHours() * 10000) + (tempTime.getMinutes() * 100) + tempTime.getSeconds();
            console.log(currentTime - this.startTime);
            if((currentTime - this.startTime) > this.duration) {
                this.timeExpired();
            }
            else {
                this.countdown.textContent = this.duration - (currentTime - this.startTime) + 'sec';
            }
        }, 500);
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
