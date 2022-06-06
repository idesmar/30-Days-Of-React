import { log, levelStart } from '../../global.js'
import { countries } from './countries.js'
import { webTechs } from './web_tech.js'

// * (1) Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
// * Refer to import at top of the page

// log(`LEVEL 2 START HERE ${separator}`)
levelStart(2)

// ? (2) First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13
const words = text.match(/\w+/g)
log(words)
log(words.length)


// ? (3) In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

  // ? add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.unshift('Meat')
const addMeat = (arr) => {
  return !(/meat/i).test(arr)
    ? arr.unshift('Meat')
    : arr
}
addMeat(shoppingCart)
log(shoppingCart, 'meat added in front if not present')

// ? add Sugar at the end of you shopping cart if it has not been already added
  const addSugar = (arr) => {
    return !(/sugar/i).test(arr)
      ? arr.push('Sugar')
      : arr
  }
  addSugar(shoppingCart)
  log(shoppingCart, 'sugar added to back if not present')

  // ? remove 'Honey' if you are allergic to
  const allergicToHoney = (arr, allergic = true) => {
    if (!allergic) return arr
    return arr.splice(arr.indexOf('Honey'), 1)
  }
  allergicToHoney(shoppingCart)
  log(shoppingCart, 'remove honey if allergic')

  // ? modify Tea to 'Green Tea'
const changeTea = (arr) => {
  arr[arr.indexOf('Tea')] = 'Green Tea'
}
changeTea(shoppingCart)
log(shoppingCart, 'change tea to green tea')


// ? (4) In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countryCheck = (arr, country) => {
  return !arr.includes(country)
    ? arr.push(country)
    : log(country)
}
countryCheck(countries, 'Ethiopia')
log(countries)


// ? (5) In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const sassCheck = (arr, preprocessor) => {
  return !arr.includes(preprocessor)
    ? arr.push(preprocessor)
    : log(`${preprocessor} is a preprocessor`)
}
sassCheck(webTechs, 'Sass')
log(webTechs)


// ? (6) Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
log(fullStack)
