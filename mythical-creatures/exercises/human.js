const Ogre = require("./ogre");

class Human {
    constructor(name) {
        this.name = name;
        this.encounterCounter = (this.encounterCounter || 0);
        this.knockedOut = false;
    };

    noticesOgre(ogre) {
        if(this.encounterCounter > 0 && this.encounterCounter % 3 === 0) {
            return true;
        } else {
            return false;
        }
    };
};

module.exports = Human; Ogre;