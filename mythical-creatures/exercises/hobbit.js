class Hobbit {
    constructor(name, age) {
        this.name = name.name;
        this.age = (age || 0);
        this.adult = false;
        this.old = false;
    };

    celebrateBirthday() {
        this.age = this.age + 1;
        if(this.age >= 33 && this.age <= 100) {
            this.adult = true;
        } else if (this.age >= 101) {
            this.old = true;
        };
    };

};

module.exports = Hobbit;