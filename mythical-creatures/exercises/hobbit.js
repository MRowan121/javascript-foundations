class Hobbit {
    constructor(name, age) {
        this.name = name.name;
        this.age = (age || 0);
    };

    celebrateBirthday() {
        this.age = this.age + 1;
    };
};

module.exports = Hobbit;