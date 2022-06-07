import { log, levelStart } from '../../global.js'

levelStart(2)
// ? (1) Write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
const getScore = (num) => {
  // change string to number
  num = +num

  /*
    * used true because case is based on comparison
      rather than name-specific (eg. case 'Monday', case 'Tuesday', etc)
    * `return` is used so no need to have a `break`
  */
  switch (true) {
    case (num > 100 || num < 0): return 'Out of Range'
      // break
    case (num >= 80): return 'A'
      // break
    case (num >= 70): return 'B'
      // break
    case (num >= 60): return 'C'
      // break
    case (num >= 50): return 'D'
      // break
    case (num >= 0): return 'F'
      // break
    default: return 'Enter Score'
      // break
  }
}


// ? (2) Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const getSeason = (month) => {
  month = month.toLowerCase()

  switch (month) {
    case 'september':
    case 'october':
    case 'november': return 'Autumn'
    case 'december':
    case 'january':
    case 'february': return 'Winter'
    case 'march':
    case 'april':
    case 'may': return 'Spring'
    case 'june':
    case 'july':
    case 'august': return 'Summer'
    default: return 'Enter a (complete) month'
  }
}


// ? (3) Check if a day is weekend day or a working day. Your script will take day as an input.
//     What is the day today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

const getDay = (day) => {
  const days = {
    'weekday': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    'weekend': ['saturday', 'sunday']
  }

  // log(days.weekday)
  if (days.weekday.includes(day.toLowerCase())) return `${day} is a weekday`
  if (days.weekend.includes(day.toLowerCase())) return `${day} is a weekend`

  return 'Enter a valid day'
}


// ======================================
const questions = document.querySelectorAll('[data-question="level2"]')
const answers = document.querySelectorAll('[data-answer="level2"]')

questions.forEach((question, idx) => {
  question.addEventListener('change', e => {
    const val = e.target.value
    let output

    if (idx === 0) output = getScore(val)
    if (idx === 1) output = getSeason(val)
    if (idx === 2) output = getDay(val)

    answers[idx].innerText = output
  })
})
// ======================================
