import { log, levelStart } from '../../global.js'

levelStart(3)

// > helper function for (1) userIdGeneratedByUser and (2) generateColors
const hexGenerator = (len) => {
  return [...Array(len)]
  .map(() => (Math.floor(Math.random() * 16)).toString(16))
  .join('')
}

// > helper function for (2) generateColors
const rgbGenerator = () => {
  return [...Array(3)].map(() => Math.floor(Math.random() * 256)).join(', ')
}

// ? (1) Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.


function postIds(arr) {
  const userIdsContainer = document.querySelector('[data-user-ids]')

  const userIdsContent = arr.map(el => {
    return `<li class="list">${el}</li>`
  }).join('')

  userIdsContainer.innerHTML = `
    <figcaption style="font-size: 1.2em">
      <span style="display:block;">Characters per Id: ${arr[0].length}</span>
      <span style="display:block;">Ids generated: ${arr.length}</span>
    </figcaption>
    <ol style="padding-left: 4ch;">${userIdsContent}</ol>
  `
}

function userIdGeneratorByUser() {

  // * helper function for getting a number via a prompt
  const getNumberFromPrompt = (promptMsg, limit = 1000) => {
    let res

    // * recursive function until input is a whole number
    const getRes = () => {
      // note: string data type
      const input = prompt(promptMsg)

      // > guard clause for cancelled prompt
      if (input === null) return

      /*  ensure input is
          a number, whole number,
          greater than 0, and less than or equal to limit */
      if (!isNaN(input) && input % 1 === 0 && input > 0 && input <= limit) {
        // convert to number and return res
        return res = +input
      }
      getRes()
    }

    getRes()
    return res
  }

  const length = getNumberFromPrompt('Enter number of characters')
  const numIds = getNumberFromPrompt('Enter number of ids')

  // > guard clause for cancelled prompt
  if (!length || !numIds) return

  // generate number or Ids with length provided by user and place in an array
  const arrayOfIds = [...Array(numIds)].map(() => hexGenerator(length))

  postIds(arrayOfIds)
}


const promptUser = document.querySelector('[data-prompt]')
promptUser.addEventListener('click', userIdGeneratorByUser)


// ? (2) Write a function generateColors which can generate any number of hexa or rgb colors.

function generateColors(format, cnt) {
  if (format === 'hexa') {
    return [...Array(cnt)].map(() => `#${hexGenerator(6)}`)
  }

  if (format === 'rgb') {
    return [...Array(cnt)].map(() => `rgb(${rgbGenerator()})`)
  }

  return 'Unknown format'
}

log(generateColors('hexa', 3), 'generateColors function')
// ['#a3e12f', '#03ed55', '#eb3d2b']
log(generateColors('hexa', 1), 'generateColors function')
// '#b334ef'
log(generateColors('rgb', 3), 'generateColors function')
// ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
log(generateColors('rgb', 1), 'generateColors function')
// 'rgb(33,79, 176)'


// ? (3) Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(arr) {
  // guard clause if argument is not an array
  if (!Array.isArray(arr)) return 'argument must be an array'
  // guard clause for 1 or 0 element array
  if (arr.length === 1 || arr.length === 0) return arr

  const newIdxArr = []
  // * recursive function to get a shuffled array index
  const indexShuffler = (num) => {
    const idx = Math.floor(Math.random() * num)
    // * guard clause to stop recursion
    if (newIdxArr.length === num) return

    if (!newIdxArr.includes(idx)) newIdxArr.push(idx)
    indexShuffler(num)
  }
  indexShuffler(arr.length)

  return newIdxArr.reduce((acc, curr) => {
    acc.push(arr[curr])
    return acc
  }, [])
}

log(shuffleArray([1, true, 'three', false, 'five']), 'shuffleArray function')


// ? (4) Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number


function factorial(num) {
  // guard clause for not whole number or NaN
  if (num % 1 !== 0 || isNaN(num)) return `${num} is not a whole number`

  const factors = []
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) factors.push(i)
  }

  // ? is the number itself supposed to be included in the factorial
  factors.push(num)

  return factors.join(', ')
}
log(factorial(121))


// ? (5) Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(arg) {
  const type = typeof (arg)

  switch (type) {
    case 'string': return !arg.length
    // Note: arrays are objects too
    case 'object': return !Object.keys(arg).length
    default: return false
  }
}

log(isEmpty(''), 'isEmpty function')
log(isEmpty([]), 'isEmpty function')
log(isEmpty({}), 'isEmpty function')


// ? (6) Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
  const errorMsg = 'An array of numbers is required'
  const notAnArray = !Array.isArray(arr)
  const notAllNumbers = !arr.filter(el => typeof(el) !== 'number')

  // guard clause
  if (notAnArray || notAllNumbers) return errorMsg

  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length
}
log(average([5, 3, 4]), 'average function')
