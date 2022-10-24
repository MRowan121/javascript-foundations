class Centaur {
    constructor(name, counter) {
        this.name = name.name;
        this.breed = name.type;
        this.cranky = false;
        this.standing = true;
        this.counter = (counter || 0);
        this.layingDown = false;
    };

    shootBow() {
        this.counter += 1;
        if(this.layingDown === true) {
            return 'NO!';
        } else if(this.counter < 3) {
            return 'Twang!!!'
        } else {
            this.cranky = true;
            return 'NO!';
        };
    };

    run() {
        this.counter += 1;
        if(this.layingDown === true) {
            return 'NO!';
        } else if(this.counter < 3) {
            return 'Clop clop clop clop!!!';
        } else {
            this.cranky = true;
            return 'NO!';
        };
    };

    sleep() {
        if(this.standing) {
            return 'NO!';
        } else {
            this.counter = 0;
            this.cranky = false;
            return 'ZZZZ';};
        };

    layDown() {
        this.standing = false;
        this.layingDown = true;
    };

    standUp() {
        this.standing = true;
        this.layingDown = false;
    };

    drinkPotion() {
        this.cranky = false;
        return "Not while I'm laying down!"
    };
};

module.exports = Centaur;