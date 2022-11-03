class Dog {
  constructor(dogDetails) {
    this.name = dogDetails.name;
    this.age = dogDetails.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }

  eat() {
    if(!this.hungry) {
      return `I refuse to eat.`
    } else {
    this.hungry = false;
    return `Yum!`;
    };
  };

  fetchBall() {
    if(this.energyLevel === 3) {
      return `Nah, I'm going to sleep instead.`
    } else {
      this.energyLevel = this.energyLevel - 1;
      return `This is fun!`
    }
  };

  sleep() {
    if(this.energyLevel === 10) {
      return `I have too much energy to rest. I'm going to chew something instead.`
    } else {
    this.energyLevel = this.energyLevel + 1;
    };
  };

  makeNewFriend(newFriend) {
    this.friends.push(newFriend.name)
  };

}

module.exports = Dog;
