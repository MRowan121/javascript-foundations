class Part {
    constructor(partDetails) {
        this.name = partDetails.name;
        this.type = partDetails.type;
        this.value = partDetails.value;
        this.broken = false;
        this.checkForValidity = this.checkValidity();
    };

    checkValidity() {
        if(this.name === undefined) {
            this.isValid = false;
            return `This part needs a name!`
        } else if(this.type === undefined) {
            this.isValid = false;
            return `This part needs a type!`
        } else if(this.value === undefined) {
            this.isValid = false;
            return `This part needs a value!`
        } else {
            this.isValid = true;
        }
    };
};

module.exports = Part;