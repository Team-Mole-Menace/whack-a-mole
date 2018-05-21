/* exported ScoreTimer */
/* globals */

const scoreTimerTemplate = document.getElementById('score-timer-template');

class Countdown {

    constructor(duration, timeExpired) {
        this.duration = duration;
        this.timeExpired = timeExpired;

    }

    update() {
        const tempDate = new Date();
        const currentTime = tempDate.getHours() + tempDate.getMinutes() + tempDate.getSeconds();
        if((currentTime - this.startTime) >= this.duration) {
            // send callback to redirect
        }
        else {
            this.scoreSpots[2].textContent = currentTime - this.startTime;
        }

    }


    render() {
        const dom = scoreTimerTemplate.content;

        this.scoreSpots = dom.querySelectorAll('span');
        this.scoreSpots[0] = this.name;
        console.log(this.scoreSpots);

        this.update();
        dom.appendChild(this.scoreSpots);


        return dom;
    }
}
