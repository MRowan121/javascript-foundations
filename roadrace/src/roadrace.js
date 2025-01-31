const { Runner } = require("mocha");

class Roadrace {
    constructor(name) {
        this.name = name.title;
        this.location = name.city;
        this.distance = 0;
        this.participants = [];
    };

    setDistance(totalDistance) {
        this.distance = totalDistance;
        return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
    };

    registerParticipants(runner) {
        this.participants.push(runner);
    };

    completeRace() {
        for(var i = 0; i < this.participants.length; i++) {
            this.participants[i].runRace(this.name, this.distance)
        };
    };
};

module.exports = Roadrace; Runner;
