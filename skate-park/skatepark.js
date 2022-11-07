class Skatepark {
    constructor(skateparkDetails) {
        this.name = skateparkDetails.name;
        this.yearFounded = skateparkDetails.year;
        this.style = skateparkDetails.type;
        this.features = skateparkDetails.features;
        this.isPrivate = skateparkDetails.isPrivate || false;
        this.cost = skateparkDetails.price || 0;
        this.occupants = [];
    };
};

module.exports = Skatepark;