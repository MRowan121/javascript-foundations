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
        if(this.favoriteAccessory === "cape") {
            return `PULL DOVE FROM SLEEVE`
        } else {
        return `PULL RABBIT FROM TOP HAT`;
        };
    };

};


module.exports = Magician;