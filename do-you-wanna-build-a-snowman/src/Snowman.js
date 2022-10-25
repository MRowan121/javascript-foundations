class Snowman {
    constructor(snowmanDetails) {
        this.carrots = snowmanDetails.carrots;
        this.coal = snowmanDetails.coal;
        this.buttons = snowmanDetails.buttons;
        this.snowballs = snowmanDetails.snowballs;
        this.magicHat = false;
    }

    canWearMagicHat() {

        if (this.coal < 2 || this.buttons < 5 || this.carrots < 1 || this.snowballs < 2) {
            //this.magicHat = false;
            return this.magicHat;
        } else {
            this.magicHat = true;
            return this.magicHat;
        }
    }
}

module.exports = Snowman;