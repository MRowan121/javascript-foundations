class Magician {
    constructor(name, clothing) {
        this.name = `The Great ` + name.name;
        this.assistant = name.assistant
        this.favoriteAccessory = (name.clothing || "top hat");
    };
};


module.exports = Magician;