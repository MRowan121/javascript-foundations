class Fairy {
    constructor(fairy, disposition) {
        this.name = fairy;
        this.dust = 10;
        this.clothes = {dresses:['Iris']};
        this.disposition = (disposition || 'Good natured')
        this.humanWards = [];
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

    becomeProvoked() {
        this.disposition = 'Vengeful';
    };

    replaceInfant(infant) {
        if(this.disposition === 'Vengeful' && this.humanWards.length < 2) {
            infant.disposition = 'Malicious';
            this.humanWards.push(infant);
        } else {
            this.disposition = 'Good natured'
            return infant;
        }
    };
};

module.exports = Fairy;