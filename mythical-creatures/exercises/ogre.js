class Ogre {
    constructor(name, home) {
        this.name = name.name;
        this.home = (name.abode || 'Swamp');
        this.encounterCounter = (this.encounterCounter || 0);
    };

    encounter() {
        this.encounterCounter += 1;
    };

};

module.exports = Ogre;