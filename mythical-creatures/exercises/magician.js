class Magician {
    constructor(name) {
        this.name = `The Great ` + name.name;
        this.assistant = name.assistant;
    };
};

module.exports = Magician;