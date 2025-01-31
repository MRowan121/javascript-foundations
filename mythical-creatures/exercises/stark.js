var Direwolf = require('./direwolf');

class Stark {
    constructor(name) {
        this.name = name.name;
        this.location = (name.area || 'Winterfell');
        this.safe = (name.safe || false);
        this.houseWords = 'Winter is Coming';
    };

    sayHouseWords() {
        if(this.safe === true) {
            return 'The North Remembers';
        } else {
            return this.houseWords
        };
    };

    callDirewolf(wolf, home) {
        var direwolf1 = new Direwolf(wolf, home);
        direwolf1.home = this.location;
        this.safe = true;
        direwolf1.huntsWhiteWalkers = false;
        direwolf1.starksToProtect.push(this);
        return direwolf1
    };

};

module.exports = Stark; Direwolf;