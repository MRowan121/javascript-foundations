class Ogre {
    constructor(name) {
        this.name = name.name;
        this.home = (name.abode || 'Swamp');
    };

    encounter(human) {
        human.encounterCounter += 1;
    };

};

module.exports = Ogre;