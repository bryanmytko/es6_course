<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inheritance Review</title>
</head>
<body>
  <script>
  function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  Dog.prototype.bark = function() {
    console.log(`Bark Bark! My name is ${this.name}`);
  };

  Dog.prototype.cuddle = function() {
    console.log(`I love you owner!`);
  };

  class Animal {
    constructor(name) {
      this.name = name;
      this.thirst = 100;
      this.belly = [];
    }
    drink() {
      this.thirst -= 10;
      return this.thirst;
    }
    eat(food) {
      this.belly.push(food);
      return this.belly;
    }
  }

  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    bark() {
      console.log('Bark bark I\'m a dog');
    }
  }

  const snickers = new Dog('Snickers', 'King Charles');
  const sunny = new Dog('Sunny', 'Golden Doodle');
  </script>
</body>
</html>
