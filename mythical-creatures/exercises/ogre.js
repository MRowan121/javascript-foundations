class Ogre {
    constructor(name) {
        this.name = name.name;
        this.home = (name.abode || 'Swamp');
        this.swings = (this.swings || 0);
    };

    encounter(human) {
        human.encounterCounter += 1;
        if(human.encounterCounter > 0 && human.encounterCounter % 3 === 0) {
            this.swings += 1
            human.knockedOut = true;
        };
    };

    swingAt() {
        this.swings += 1;
    };

    apologize(human) {
        human.knockedOut = false;
    };

};

module.exports = Ogre;