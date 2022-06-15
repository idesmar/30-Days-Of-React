import { log, levelStart } from '../../global.js'
import { countriesData } from './countries.js'

levelStart(2)

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// ? (1) Find the person who has many skills in the users object.
// personal understanding of the question: find person with the most number of skills
const getMaxSkillCount = (obj) => {
  let maxCount = 0
  Object.keys(obj).forEach(key => {
    // get the number of elements in skills array
    const objSkillCount = obj[key].skills.length

    // `>` used to skip if equal since only the maxCount is needed
    if (objSkillCount > maxCount) {
      maxCount = objSkillCount
    }
  })
  return maxCount
}

const getUserMaxSkillCount = (obj) => {
  let userMaxSkill = []

  const maxCount = getMaxSkillCount(users)

  // find user/s with the maxCount length
  Object.keys(obj).forEach(key => {
    if (obj[key].skills.length === maxCount) userMaxSkill.push(key)
  })
  return userMaxSkill
}
log(getUserMaxSkillCount(users), 'user with most skill count')


// ? (2) Count logged in users,count users having greater than equal to 50 points from the following object.
const getCountLoggedUser50 = () => {
  let count = 0
  // * for in loop used rather than Object methods ... for a change, maybe?
  for (let user in users) {
    if (users[user].isLoggedIn && users[user].points >= 50) ++count
  }
  return count
}
log(getCountLoggedUser50(), 'logged in with 50+ points')


// ? (3) Find people who are MERN stack developer from the users object
const getMERNdevs = (obj) => {
  let MERNdevs = []
  const MERNarr = ['MongoDB', 'Express', 'React', 'Node']
  const keys = Object.keys(obj)

  keys.forEach(key => {
    const searchArr = obj[key].skills //.toLowerCase()
    let count = 0

    // guard clause to stop if skills are less than MERN.Length (4)
    if (searchArr.length < MERNarr.length) return

    // compare if MERN is included in skills array
    MERNarr.forEach(el => {
      if (searchArr.includes(el)) ++count
    })

    // add key/user if (all 4) MERN is present in skills
    if (count === MERNarr.length) MERNdevs.push(key)
  })

  return MERNdevs
}
log(getMERNdevs(users), 'MERN Devs')


// ? (4) Set your name in the users object without modifying the original users object
/* syntax:
  * Object.assign(target, ...sources)
  eg. const copyPerson = Object.assign({}, person) */

const allUsers = Object.assign({}, users)
allUsers.Siege = {
  email: 'siege@siege.com',
  skills: ['HTML', 'CSS', 'Javascript', 'SCSS'],
  age: null,
  isLoggedIn: true,
  points: 50
}
log(allUsers, 'allUsers')


// ? (5) Get all keys or properties of users object
const usersKeys = Object.keys(users)
log(usersKeys, 'keys')


// ? (6) Get all the values of users object
const usersValues = Object.values(users)
log(usersValues, 'values')


// ? (7) Use the countries object to print a country name, capital, populations and languages.
// data used is an array of objects instead
const getCountryData = (country) => {
  country = country.toLowerCase().trim()

  const resultEl = document.querySelector('[data-lookup-result]')
  resultEl.innerHTML = ''

  // guard clause for empty string
  if (!country) return

  // lowercase countries array for searching
  const countriesArr = countriesData.map(el => {
    return el.name.toLowerCase()
  })

  // guard clause for not found
  if (!countriesArr.includes(country)) {
    resultEl.innerHTML = `${country} not found in database`
    return
  }

  // index of country in countriesArr
  let idx = countriesArr.indexOf(country)

  let fragment = `
  <p>Name: ${countriesData[idx].name}</p>
  <p>Capital: ${countriesData[idx].capital}</p>
  <p>Population: ${countriesData[idx].population}</p>
  <p>Languages: ${countriesData[idx].languages.join(', ')}</p>
  `
  resultEl.innerHTML = fragment
}
const lookupCountry = document.querySelector('[data-lookup-country]')
lookupCountry.addEventListener('change', e => getCountryData(e.target.value))
