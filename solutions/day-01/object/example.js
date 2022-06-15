import { log, levelStart } from '../../global.js'

const runCodeButton = document.querySelector('[data-run-example]')

const runCode = () => {
  levelStart('EXAMPLE')

  const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo: function () {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
  }

  // Object methods: Object.assign, Object.keys, Object.values, Object.entries
  // hasOwnProperty

  const copyPerson = Object.assign({}, person)
  log(copyPerson)

  const keys = Object.keys(copyPerson)
  log(keys) // ['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']

  const address = Object.keys(copyPerson.address)
  log(address) // ['street', 'pobox', 'city']

  const values = Object.values(copyPerson)
  log(values)

  const entries = Object.entries(copyPerson)
  log(entries)

  log(copyPerson.hasOwnProperty('name'))
  log(copyPerson.hasOwnProperty('score'))
}

// * {once: true} limits event listener to run only once
runCodeButton.addEventListener('click', runCode, {once: true})
