const GolfCourse = require("./golf-course");

class Golfer {
    constructor(golferDetails) {
        this.name = golferDetails.name;
        this.handicap = golferDetails.handicap;
        this.frustration = 0;
        this.confidence = 0;
    };

    calculateAvg(par) {
        this.handicap = this.handicap + par;
        return `I usually shoot a ${this.handicap} on average.`
    };

    playRound(GolfCourse) {
        if(GolfCourse.difficulty === 'moderate') {
            this.frustration = 100;
        } else {
            this.frustration = 500;
        }
    };

    simulatePractice(num) {
        this.confidence = this.confidence + (10 * num)
    };

}

module.exports = Golfer;
