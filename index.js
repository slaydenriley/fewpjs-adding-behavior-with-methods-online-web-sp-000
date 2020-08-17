class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  };

  speak() {
    return `${this.name} says meow!`;
  };
};

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  };
<<<<<<< HEAD

  speak() {
    return `${this.name} says woof!`;
  };
=======
>>>>>>> ea5db39c1e9573a943702edef6d40908634d7a91
};

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  };
<<<<<<< HEAD

  speak() {
    if (this.sex == "male") {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    };
  };
=======
>>>>>>> ea5db39c1e9573a943702edef6d40908634d7a91
};
