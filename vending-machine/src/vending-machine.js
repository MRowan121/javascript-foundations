class VendingMachine {
    constructor(machineDetails) {
        this.id = machineDetails.id;
        this.isBroken = machineDetails.isBroken;
        this.snacks = [];
    };

    addSnacks(snackType) {
        for(var i = 0; i < this.snacks.length; i++) {
            if(this.snacks[i].name === snackType.name) {
                return `Sorry, that snack is already stocked! Try adding a different snack.`
            }
        }
        this.snacks.push(snackType);
    };

    purchaseSnack(snackName, payment) {
        for(var i = 0; i < this.snacks.length; i++) {
            if(this.snacks[i].name === snackName) {
                this.snacks[i].removeItem()
                return `Success! Here is $${payment - this.snacks[i].price} back!`
            }
        };
    }
};

module.exports = VendingMachine;
