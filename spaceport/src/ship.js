class Ship {
    constructor(shipDetails) {
        this.name = shipDetails.name;
        this.type = shipDetails.type;
        this.maxCrew = shipDetails.maxCrew;
        this.odometer = shipDetails.odometer || 0;
        this.fuelCapacity = shipDetails.fuelCapacity || 10;
        this.fuel = 0;
        this.captain = shipDetails.captain;
        this.crew = [];
    };

    addCrew(newCrew) {
        for(var i = 0; i < newCrew.length; i++) {
            if(this.crew.length === this.maxCrew) {
                return
            } else {
                this.crew.push(newCrew[i])
            }
        }
    };
};

module.exports = Ship;