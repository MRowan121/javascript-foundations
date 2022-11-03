var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name;
    this.dog = dog;
  };

  fillFoodBowl() {
    this.dog.eat()
  };

  throwBall() {
    this.dog.fetchBall();
    return `${this.dog.name} loves playing fetch!`
  }

  introduceNewFriends(dog) {
    this.dog.makeNewFriend(dog);
  }

  adoptAPup(name, age) {
    if(this.dog !== undefined) {
      return `You can't adopt ${name}. You already have ${this.dog.name}!`
    } else {
    this.dog = new Dog({name: name, age: age})
  };
};

};

module.exports = Person;
