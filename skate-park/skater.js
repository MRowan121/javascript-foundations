class Skater {
    constructor(skaterDetails) {
        this.name = skaterDetails.name;
        this.skill = skaterDetails.skill;
        this.tricks = skaterDetails.tricks;
        this.money = skaterDetails.cash;
        this.frustration = 0;
    };

    practice(trickName) {
        if(this.frustration === 2) {
            this.tricks[trickName] = true;
            this.frustration = 0;
            return `I just learned to ${trickName}!!!`
        }
        if(this.tricks[trickName] === false) {
            this.frustration = this.frustration + 1;
        }
    };
};

module.exports = Skater;