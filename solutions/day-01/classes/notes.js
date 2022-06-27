import { log, levelStart } from '../../global.js'


levelStart('notes')

/*
  > creating an object from a class is called instantiation (aka creating an instance)
  > class constructor can have a default value
    eg. constructor(firstName = 'unknown', lastName = 'unknown') {... // code here}
    given the constructor above, if no firstName or lastName is passed, the string 'unknown' will be used in its place.
  > class constructor can also have properties with an initial value
    note: that these properties are excluded from the constructor parameter
    eg. constructor(firstName, lastName) { this.firstName = firstName; this.lastName = lastName; this._score = 0 } // * this._score is a property with initial value
    notice above that score is excluded from the constructor parameters
    ? side note: In a class, variables cannot be defined outside of constructor or methods
    NOTE: with the exemption of PRIVATE variables
    NOTE: PRIVATE FIELDS (variables & functions) can only be accessed inside the class
    [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

  NOTE: GETTERS and SETTERS do NOT need a parenthesis () when being used
  [even if they look like a function/method, they do not work like so]
  * these abstract the end user from easily modifying an object's property
  > getter is used to access the value of an object instead of directly accessing the property
    note: getters CANNOT have any parameter
    class Person1 { // ? getter sample
      constructor(name) { this.name = name; this._score = 0; }
      get score() { return this._score } // ? _score is used in this example to signify that this variable should not be renamed (even if it is possible to do so)
    }
    const tester1 = new Person1; log(tester1.score); // ? notice that parenthesis is not needed
  > setter is used to modify/assign a new value to an object's property
    note: setters should have ONLY ONE parameter
  > static methods are methods/functions that can only be accessed using the API constructor (class) directly; NOT through the instances created using the constructor
  * static methods may be used as utility functions, such as to create or clone objects
  class Person { // ? static method sample with setter
    constructor(name) { this.name = name; this._score = 0; }
    get score() { return this._score }
    set addScore(x) { this._score += x }
    static getMinuteNow() { const now = new Date(); return now.getMinutes(); }
  }
  log(Person.getMinuteNow(), 'getMinuteNow') // works as intended
  const personTester = new Person('person tester')
  // log(personTester.getMinuteNow()) // ! error because static does not work on instances
  > inheritance keeps the code DRY
  * extends keyword, super(...) inside constructor, super.methodName() inside child class method
  class Adult extends Person { // ? inheritance sample based on getter method sample
    constructor(name, favoriteFood) {
      super(name)
      this.favoriteFood = favoriteFood
    }
    // note: this._score w/initial value from parent class is still accessible in child class
  }
  const adultTester = new Adult('adult tester', 'yummy food')
  log(adultTester.score) // outputs the initial value (0) from parent class
  adultTester.addScore = 10
  log(adultTester.score) // outputs 10
  > child class methods can easily OVERRIDE parent class methods by using the same method name
  > PRIVATE
*/



// > GETTER SAMPLE
class Person1 {
  constructor(name) { this.name = name; this._score = 0; }
  get score() { return this._score; } // ? _score is used in this example to signify that this variable should not be renamed (even if it is possible to do so)
}
const tester1 = new Person1; log(tester1.score); // ? notice that parenthesis is not needed


// > STATIC METHOD SAMPLE WITH SETTER
class Person {
  constructor(name) { this.name = name; this._score = 0; }
  get score() { return this._score }
  set addScore(x) { this._score += x }
  static getMinuteNow() { const now = new Date(); return now.getMinutes(); }
}
log(Person.getMinuteNow(), 'getMinuteNow') // works as intended
const personTester = new Person('person tester')
// log(personTester.getMinuteNow()) // ! error because static does not work on instances


// > INHERITANCE BASED ON GETTER METHOD SAMPLE
class Adult extends Person {
  constructor(name, favoriteFood) {
    super(name)
    this.favoriteFood = favoriteFood
  }
  // note: this._score w/initial value from parent class is still accessible in child class
}
const adultTester = new Adult('adult tester', 'yummy food')
log(adultTester.score) // outputs the initial value (0) from parent class
adultTester.addScore = 10
log(adultTester.score) // outputs 10


// > CLASS SAMPLE FROM RESOURCE MATERIAL
class PersonFromResourceMaterial {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

log(PersonFromResourceMaterial.favoriteSkill())
log(PersonFromResourceMaterial.showDateTime())

const tester = new PersonFromResourceMaterial('tes', 'ter', 100, 'somewhere', 'some city')
// log(tester.showDateTime()) // error because static function does not work on instances
