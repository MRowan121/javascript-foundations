const Bag = require("./bag");
const Costume = require("./costume");

class TrickOrTreater {
    constructor(Costume, Bag) {
        this.dressedUpAs = Costume.style;
        this.bag = Bag;
        this.hasCandy = false;
        this.countCandies = 0;
    };

    putCandyInBag(candy) {
        this.bag.fill(candy);
        this.countCandies = this.bag.count;
        this.hasCandy = true;
    };

    eat() {
        if(this.countCandies > 0) {
            this.countCandies = this.countCandies - 1;
            this.bag.candies.pop();
        } else {
            this.hasCandy = false;
        }
    };
};

module.exports = TrickOrTreater;