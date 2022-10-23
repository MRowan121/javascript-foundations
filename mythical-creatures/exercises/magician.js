class Magician {
    constructor(name) {
        this.name = `The Great ` + name.name;
        this.assistant = name.assistant
        this.favoriteAccessory = (name.clothing || "top hat");
        this.confidencePercentage = 10;
    };

    performIncantation(magic) {
    return magic.toUpperCase() + `!`
    };

    performTrick() {
        this.confidencePercentage += 10;
        if(this.favoriteAccessory === "cape") {
            return `PULL DOVE FROM SLEEVE`
        } else {
        return `PULL RABBIT FROM TOP HAT`;
        };
    };

    performShowStopper() {
        if(this.confidencePercentage < 100 || this.assistant === false) {
            return `Oh no, this trick is not ready!`;
        } else {
            return `WOW! The magician totally just sawed that person in half!`
        };
    };

};


module.exports = Magician;