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
        if(this.exercise === 3) {
            this.cranky = true;
            return 'Twang!!!';
        } else {
        return 'Twang!!!'
        };
    };

    run() {
        this.exercise = this.exercise + 1;
        if(this.exercise === 3) {
            this.cranky = true;
            return 'Clop clop clop clop!!!';
        } else {
            return 'Clop clop clop clop!!!';
        };
    };
};

module.exports = Centaur;