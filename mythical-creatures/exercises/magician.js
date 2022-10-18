class Magician {
    constructor(name) {
        this.name = `The Great ` + name.name;
        this.assistant = name.assistant
        this.favoriteAccessory = (name.clothing || "top hat");
    };

    performIncantation(magic) {
    return magic.toUpperCase() + `!`
    };

};


module.exports = Magician;