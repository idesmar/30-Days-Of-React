import { log, levelStart } from '../../global.js'

levelStart(1)

// ? (1) Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

const checkDrivingAge = (age) => {
  if (+age >= 18) return 'You are old enough to drive'
  return `Wait ${18 - +age} more year/s`
}


// ? (2) Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

const compareOurAge = (age) => {
  const myAge = 25
  const yourAge = +age
  const diff = Math.abs(myAge - yourAge)

  // using if, else if, else per exercise requirement
  if (myAge > yourAge) {
    return `You are ${diff} year/s younger than me`
  } else if (myAge < yourAge) {
    return `You are ${diff} year/s older than me`
  } else {
    return `We are of the same age at ${age}`
  }
}


// ? (3) If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

// using if else
// ternary operator.
// let a = 4
// let b = 3
//   4 is greater than 3

const a = 4
const b = 3

const compareIfElse = (a, b) => {
  let comparison

  // if one is NaN
  if (isNaN(a) || isNaN(b)) return 'Enter a number'

  if (a > b) { comparison = 'greater than' }
  else if (a < b) { comparison = 'less than' }
  else { comparison = 'equal to' }

  return `${a} is ${comparison} ${b}`
}
log(compareIfElse(a, b), 'using if... else if... else')

const compareTernary = (a, b) => {
  // if one is NaN
  if (isNaN(a) || isNaN(b)) return 'Enter a number'
  // equal
  if (a === b) return `${a} is equal to ${b}`

  return (a > b)
    ? `${a} is greater than ${b}`
    : `${a} is less than ${b}`
}
log(compareTernary(a, b), 'using ternary')


// ? (4) Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is an odd number.

const isOddOrEven = (num) => {
  if (isNaN(num)) return 'Enter a number'
  if (num % 1 !== 0) return 'Enter a whole number'

  return (num % 2 === 0)
    ? `${num} is an even number`
    : `${num} is an odd number`
}


// ======================================
let question
const level1Questions = document.querySelectorAll('[data-question="level1"]')
const level1Answers = document.querySelectorAll('[data-answer="level1"]')

level1Questions.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    question = idx === 2
      ? 'Enter a number:'
      : 'Enter your age:'

    let num = prompt(question)
    const answer = level1Answers[idx]
    let msg = 'Enter a number'

    // check if age entered is not a number
    if (isNaN(num)) return  answer.innerText = msg

    // question 1 (index 0)
    if (idx === 0) msg = checkDrivingAge(num)
    // question 2 (index 1)
    if (idx === 1) msg = compareOurAge(num)
    // question 4 (index 2)
    if (idx === 2) msg = isOddOrEven(num)

    answer.innerText = msg
  })
})
// ======================================