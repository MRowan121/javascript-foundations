class Vampire {
    constructor(name, pet, ouncesDrank) {
        this.name = name;
        this.pet = (pet || "bat");
        this.thirsty = true;
        this.ouncesDrank = (ouncesDrank || 0);
    };

    drink() {
        this.ouncesDrank = this.ouncesDrank + 10;
        return this.thirsty = false;
    };

};

module.exports = Vampire;