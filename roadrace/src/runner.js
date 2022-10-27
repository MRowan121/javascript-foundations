class Runner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = (this.milesRun || 0);
        this.fitness = (this.fitness || 25);
        this.completedRaces = [];
    };

    runSomeMiles(milesRan) {
        this.milesRun += milesRan;
        this.fitness += milesRan;
    };

    stretch() {
        this.fitness += .5;
    };

    runRace(raceName, milesRan) {
        this.runSomeMiles(milesRan);
        this.completedRaces.push(raceName);
    };

};

module.exports = Runner;
