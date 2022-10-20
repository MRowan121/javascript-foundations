class Centaur {
    constructor(name, exercise) {
        this.name = name.name;
        this.breed = name.type;
        this.cranky = false;
        this.standing = true;
        this.exercise = (exercise || 0);
    };

    shootBow() {
        this.exercise = this.exercise + 1;
        if(this.exercise >= 3) {
            this.cranky = true;
            return 'NO!';
        } else {
            return 'Twang!!!'
        };
    };

    run() {
        this.exercise = this.exercise + 1;
        if(this.exercise >= 3) {
            this.cranky = true;
            return 'NO!';
        } else {
            return 'Clop clop clop clop!!!';
        };
    };

    sleep() {
        if(this.standing) {
            return 'NO!';
        }
    };
};

module.exports = Centaur;