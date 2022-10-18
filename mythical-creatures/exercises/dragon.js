class Dragon {
    constructor(name, rider, mealsEaten) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.mealsEaten = (mealsEaten || 0);
    };

    greet() {
        return `Hi, ${this.rider}!`;
    };

    eat() {
        this.mealsEaten = this.mealsEaten + 1;
        if(this.mealsEaten >= 3) {
            return this.hungry = false;
        };
    };

};

module.exports = Dragon;