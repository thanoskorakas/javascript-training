/*
    - Create a Vehicle object that initializes `wheels` from an argument 
    - Vehicle has a isMoving property that is false by default
    - Give vehicles the ability to `.startEngine()` and `.stopEngine()`:
        + If a vehicle's engine starts, `isMoving` property should set to true.
        + If a vehicle's engine stops, `isMoving` property should set to false.
    - Create another object called Bike that inherits from Vehicle and has 2 `wheels`
    - Create another object called Car that inherits from Vehicle and has 4 `wheels`
    - Create a new instance of Car and Bike objects and try to start and stop the engine and log the isMoving property
*/

class Vehicle {
  wheels;
  isMoving = false;

  constructor(wheels) {
    this.wheels = wheels;
  }

  startEngine() {
    this.isMoving = true;
  }

  stopEngine() {
    this.isMoving = false;
  }
}

class Bike extends Vehicle {
  constructor() {
    super(2);
  }
}

class Car extends Vehicle {
  constructor() {
    super(4);
  }
}

const bike = new Bike();
console.log("Engine is moving: ", bike.isMoving);
bike.startEngine();
console.log("Engine is moving: ", bike.isMoving);
bike.stopEngine();
console.log("Engine is moving: ", bike.isMoving);

const car = new Car();
console.log("Engine is moving: ", car.isMoving);
car.startEngine();
console.log("Engine is moving: ", car.isMoving);
car.stopEngine();
console.log("Engine is moving: ", car.isMoving);
