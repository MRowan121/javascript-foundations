class Fairy {
    constructor(fairy) {
        this.name = fairy;
        this.dust = 10;
        this.clothes = {dresses:['Iris']};
    };

    receiveBelief() {
        this.dust += 1;
    };

    believe() {
        this.dust += 10;
    };

    makeDresses(flower) {
        this.clothes.dresses.push(...flower)
    };

};

module.exports = Fairy;