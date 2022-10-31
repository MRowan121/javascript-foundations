class GolfCourse {
    constructor(name, difficulty, openings, [feature1, feature2]) {
        this.name = name;
        this.difficulty = difficulty;
        this.openings = openings;
        this.features = [feature1, feature2];
    }

}

module.exports = GolfCourse;
