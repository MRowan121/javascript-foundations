class Sphinx {
    constructor() {
        this.riddles = [];
    };

    collectRiddle(riddle) {
        if (this.riddles.length === 3) {
            this.riddles.splice(0, 1)
            this.riddles.push(riddle)
        } else {
            this.riddles.push(riddle)
        }
    };

    attemptAnswer() {
        // maybe use find index to find which riddle contains the provided answer?
    };
};

module.exports = Sphinx;