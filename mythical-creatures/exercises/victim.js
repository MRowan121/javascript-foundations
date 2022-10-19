class Victim {
    constructor(name, alive) {
        this.name = name;
        this.alive = (alive || true);
    };
};

module.exports = Victim;