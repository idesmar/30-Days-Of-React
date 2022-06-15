import { log, levelStart } from '../../global.js'

levelStart(1)

// ? (1) Create an empty object called dog
const dog = {}

// ? (2) Print the the dog object on the console
log(dog)

// ? (3) Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'doggy'
dog.legs = 4
dog.color = 'fawn'
dog.age = 3
// > method below works while still using arrow function because `this` keyword is not used
dog.bark = () => {
  return 'woof woof'
}

log(dog.bark())

// ? (4) Get name, legs, color, age and bark value from the dog object
const dogValues = Object.values(dog)
log(dogValues)


// ? (5) Set new properties the dog object: breed, getDogInfo
dog.breed = 'mut'

// ! `this` keyword does not wark with arrow function
dog.getDogInfo = function () {
  return `${this.name} has ${this.legs} legs, color ${this.color}, ${this.age} year/s old ${this.hasOwnProperty('bark') ? 'and can bark' : 'and doesn\'t bark'}`
}

log(dog.getDogInfo())