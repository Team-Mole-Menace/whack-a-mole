/* exported Countdown */
/* globals */

const scoreTimerTemplate = document.getElementById('score-timer-template');

class Countdown {

    constructor(name, score, duration, timeExpired) {
        // Player name
        this.name = name;
        this.score = score;

        // Game duration
        this.duration = 30;

        // End of game function
        this.timeExpired = timeExpired;

        // Needed to track countdown
        const tempTime = new Date();
        this.startTime = tempTime.getSeconds();
    }

    update() {
        // Update timer every 1000ms
        this.timer = setInterval(() => {
            const tempTime = new Date();
            let currentTime = tempTime.getSeconds();
            if(currentTime - this.startTime < 0) {
                this.aboveSixty = true;
            }
            // Check if Date() seconds has reset to 59
            if(this.aboveSixty) {
                currentTime += 60;
            }
            if((currentTime - this.startTime) > this.duration) {
                this.timeExpired();
            }
            else {
                this.countdown.textContent = this.duration - (currentTime - this.startTime) + 'sec';
            }
        }, 1000);
    }

    render() {
        const dom = scoreTimerTemplate.content;

        const scoreSpots = dom.querySelectorAll('span');
        scoreSpots[0].textContent = this.name;
        this.countdown = scoreSpots[2];
        this.countdown.textContent = this.duration + 'sec';

        this.update();

        dom.appendChild(this.countdown);

        return dom;
    }
}
