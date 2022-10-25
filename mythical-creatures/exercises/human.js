class Human {
    constructor(name) {
        this.name = name;
        this.encounterCounter = (this.encounterCounter || 0);
    };
};

module.exports = Human;