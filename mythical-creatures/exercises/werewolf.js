var Victim = require('./victim');

class Werewolf {
    constructor(name) {
        this.name = name;
        this.form = "human";
        this.hungry = false;
    };

    completeTransformation() {
        if(this.form === "human") {
        this.form = "wolf";
        this.hungry = true;
        return `Aaa-Woooo!`;
        } else {
            this.hungry = false;
            this.form = "human";
            return `Where are I?`;
        };
    };

    eatVictim(person) {
        person.alive = false;
        return `Yum, ${person.name} was delicious.`;
    };

};

module.exports = Werewolf;