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
    
    attemptAnswer(answer) {
        for(var i = 0; i < this.riddles.length; i++) {
            if(this.riddles[i].answer === answer) {
                this.riddles.splice([i], 1)
                return `That wasn't that hard, I bet you don't get the next one`
            };
        };
    };
};

module.exports = Sphinx;