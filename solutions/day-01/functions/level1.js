import { log, levelStart } from '../../global.js'

levelStart(1)
// helper function used in areaOfCircle and getBMI
const getSquare = x => x ** 2
// or x * x or Math.pow(x, 2)


// ? (1) Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
  return `Full Name: ${firstName} ${lastName}`
}
log(fullName('siege', 'idesmar'), 'fullName function')


// ? (2) Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
  return a + b
}
log(addNumbers(1, 3), 'addNumbers function')


// ? (3) Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
function areaOfCircle(r) {
  return (Math.PI * getSquare(r)).toFixed(2)
  /*  +(Math.PI * (r * r)).toFixed(2)
      adding unary will convert to number */
}
log(areaOfCircle(5), 'areaOfCircle function (returns string)')


// ? (4) Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32
}
log(convertCelsiusToFahrenheit(24), 'convertCelsiusToFahrenheit function')


// ? (5) Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// weight (kg)
// height (m)
const getBMI = (weight, height) =>  +(weight / (getSquare(height))).toFixed(1)
log(getBMI(69, 1.7526))

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function getBMISpecific(weight, height) {
  const BMI = getBMI(weight, height)
  let category

  switch (true) {
    case (BMI < 18.5):
      category = 'Underweight'
      break
    case (BMI <= 24.9):
      category = 'Normal weight'
      break
    case (BMI <= 29.9):
      category = 'Overweight'
      break
    case (BMI >= 30):
      category = 'Obese'
      break
    default:
      category = 'Check input'
      break
  }

  return `${category} with BMI: ${BMI}`
}
log(getBMISpecific(69, 1.7526))


// ? (6) Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const toTitleCase = (str) => {
  /* // multi line
    str = str.toLowerCase()
    str = str[0].toUpperCase().concat(str.slice(1))
    return str
  */
  // one line equivalent below
  return str[0].toUpperCase().concat(str.slice(1).toLowerCase())
}

// copy from getSeason in Conditionals level2.js
function checkSeason(month) {
  month = month.toLowerCase()

  switch (month) {
    case 'september':
    case 'october':
    case 'november': return `${toTitleCase(month)}: Autumn`
    case 'december':
    case 'january':
    case 'february': return `${toTitleCase(month)}: Winter`
    case 'march':
    case 'april':
    case 'may': return `${toTitleCase(month)}: Spring`
    case 'june':
    case 'july':
    case 'august': return `${toTitleCase(month)}: Summer`
    default: return `${toTitleCase(month)} is not a month`
  }
}

log(checkSeason('JuLy'))
