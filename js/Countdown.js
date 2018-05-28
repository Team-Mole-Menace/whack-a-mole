/* exported Countdown */
/* globals */

const scoreTimerTemplate = document.getElementById('score-timer-template');

class Countdown {

    constructor(duration, onTimeExpired) {
        // Game duration
        this.duration = duration;

        // End of game function
        this.onTimeExpired = onTimeExpired;

        // Needed to track countdown
        this.startTime = new Date().getSeconds();
    }

    update() {
        // Update timer every 1000ms
        this.timer = setInterval(() => {
            let currentTime = new Date().getSeconds();
            const elapsed = currentTime - this.startTime;

            // I don't get the "aboveSixty" and += 60.
            // Isn't the elapsed time absolute number of seconds?
            if(elapsed < 0) {
                this.aboveSixty = true;
            }
            // Check if Date() seconds has reset to 59
            if(this.aboveSixty) {
                currentTime += 60;
            }

            if(elapsed > this.duration) {
                this.onTimeExpired();
            }
            else {
                this.countdown.textContent = (this.duration - elapsed) + 'sec';
            }
        }, 1000);
    }

    render() {
        const dom = scoreTimerTemplate.content;

        const scoreSpots = dom.querySelectorAll('span');
        this.countdown = scoreSpots[2];
        this.countdown.textContent = this.duration + 'sec';

        this.update();

        dom.appendChild(this.countdown);

        return dom;
    }
}
