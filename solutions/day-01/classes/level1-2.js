import { log, levelStart } from './../../global.js'

levelStart('1 & 2')

// ? (Level1: 1) Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }
  speak() {
    return 'I am speaking'
  }
}

const animalInstance = new Animal('test', 13, 'black', 4)
animalInstance.speak()


// ? (Level1: 2) Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs)
    this.breed = breed
  }
  speak() { // > answer to (Level2: 1)
    log('bark bark')
  }
}

const dogInstance = new Dog('test', 13, 'fawn', 4, 'pug')
dogInstance.speak()


// ? (Level2: 1) Override the method you create in Animal class
