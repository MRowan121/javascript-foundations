class Pirate {
    constructor(name, job, booty) {
        this.name = name;
        this.job = (job || "scallywag");
        this.cursed = false;
        this.booty = (booty || 0);
    };

    robShip() {
        this.booty = this.booty + 100;
        return `YAARRR!`
    };

};

module.exports = Pirate;