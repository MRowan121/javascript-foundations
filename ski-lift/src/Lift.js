var Skier = require('./Skier');

class Lift {
    constructor(limit) {
        this.inService = true;
        this.limit = limit;
        this.skiers = [];
        this.safetyBar = 'up';
    };

    admitSkier(skierName, skierTicket) {
        var skier = new Skier(skierName, skierTicket)
        if(this.skiers.length === this.limit) {
            return `Sorry, ${skier.name}. Please wait for the next lift!`;
        } else if(skier.hasLiftTicket === false) {
            return `Sorry, ${skier.name}. You need a lift ticket!`
        } else {
            this.skiers.push(skier);
        };
    };

    startLift() {
        if(this.limit - this.skiers.length === 1) {
            return `We still need ${this.limit - this.skiers.length} more skier!`;
        } else if(this.limit - this.skiers.length > 1) {
            return `We still need ${this.limit - this.skiers.length} more skiers!`;
        } else {
            this.safetyBar = 'down';
        }
    };
};

module.exports = Lift;