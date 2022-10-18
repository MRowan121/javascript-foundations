class Pirate {
    constructor(name, job, booty) {
        this.name = name;
        this.job = (job || "scallywag");
        this.cursed = false;
        this.booty = (booty || 0);
    };

    robShip() {
        if(this.booty >= 500) {
            this.cursed = true;
            return `ARG! I've been cursed!`;
        };
        this.booty = this.booty + 100;
        return `YAARRR!`
    };

    liftCurse() {
        this.booty = this.booty - 300;
        this.cursed = false;
        return `Your curse has been lifted!`;
    };

};

module.exports = Pirate;