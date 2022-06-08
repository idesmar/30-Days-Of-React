import { log, levelStart } from '../../global.js'

levelStart(3)

// Write a program which tells the number of days in a month, now consider leap year.

// August - 31
// December - 31
// January - 31
// July - 31
// March - 31
// May - 31
// October - 31

// April - 30
// June - 30
// November - 30
// September - 30

// February - 28/29

// 31 days
const maxDays = ['august', 'december', 'january', 'july', 'march', 'may', 'October']
// 30 days
const midDays = ['april', 'june', 'november', 'september']
// 28/29 days
const minDays = ['february']

const testObject = {
  max: maxDays,
  mid: midDays,
  min: minDays
}

log(testObject.contains('april'))

// global variables
let leap
let month
let days

const answer = document.querySelector('[data-answer="level3"]')
const getDays = (mth, lp) => {
  mth = mth.toLowerCase()
  if (![...maxDays, ...midDays, ...minDays].includes(mth)) {
    answer.innerText = 'Enter a valid month'
    return
  }
  if (maxDays.includes(mth)) days = 31
  if (midDays.includes(mth)) days = 30
  if (minDays.includes(mth)) days = lp ? 29 : 28

  answer.innerText = `${month} has ${days} days`
}


const monthInput = document.querySelector('[data-question="level3"]')
monthInput.addEventListener('change', e => {
  month = e.target.value
  getDays(month, leap)
})

const checkbox = document.querySelector('[data-leap-year]')
checkbox.addEventListener('change', e => {
  leap = e.target.checked
  getDays(month, leap)
})
