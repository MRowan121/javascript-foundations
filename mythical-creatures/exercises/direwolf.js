class Direwolf {
    constructor(name, home, size) {
        this.name = name;
        this.home = (home || 'Beyond the Wall');
        this.size = (size || 'Massive');
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    };

    protect(family) {
        if(this.home === family.location && this.starksToProtect.length < 2) {
            this.huntsWhiteWalkers = false;
            family.safe = true;
            this.starksToProtect.push(family);
        };
    };

    leave(family) {
        var familyIndex = this.starksToProtect.findIndex(object => {
            return object === family;
        })
        this.starksToProtect.splice(familyIndex, 1)
        family.safe = false;
    };

};

module.exports = Direwolf;