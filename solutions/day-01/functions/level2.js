import { log, levelStart } from '../../global.js'

levelStart(2)

// ? (1) Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

function solveQuadratic(a = 0, b = 0, c = 0) {
  // ax2 + bx + c = 0
  // x = (-b +/- Math.sqrt((b**2)-(4*a*c)))/(2*a) // * formula for solving x
  let ans = []
  let x1 = (-b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)
  let x2 = (-b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)

  if (!isNaN(x1)) ans.push(x1)
  if (!isNaN(x2) && x2 !== x1) ans.push(x2)

  // ans.length === 0 is falsy hence [0]
  return ans.length ? ans : [0]
}

log(solveQuadratic(), '[0]') // {0}
log(solveQuadratic(1, 4, 4), '[-2]') // {-2}
log(solveQuadratic(1, -1, -2), '[2, -1]') // {2, -1}
log(solveQuadratic(1, 7, 12), '[-3, -4]') // {-3, -4}
log(solveQuadratic(1, 0, -4), '[2, -2]') //{2, -2}
log(solveQuadratic(1, -1, 0), '[1, 0]') //{1, 0}


// ? (2) Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
  Array.isArray(arr) // * checking if argument is an array
    ? log(...arguments, 'array') // or just log(arr)
    : log(`${arr} type is ${typeof(arr)}`)
}
printArray([1, 2, 3, 4])


// ? (3) Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
function showDate() {
  const now = new Date(Date.now())
  const date = now.toLocaleDateString()
  const hrs = now.getHours()
  const mins = now.getMinutes()
  return `${date} ${hrs}:${mins}`
}
log(showDate(), 'show date function')


// ? (4) Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

function swapValues() {
  if (arguments.length > 2) return 'Can only have 2 arguments'
  return `${arguments[1]} ${arguments[0]}`
}
log(swapValues(3, 4), 'swapValues function')


// ? (5) Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

// * NOT using array.reverse()
function reverseArray(arr) {
  if (!Array.isArray(arr)) return 'an array is needed'

  return arr.reduce((acc, curr) => {
    acc.unshift(curr)
    return acc
  }, [])
}
log(reverseArray(['A', 'B', 'C']), 'reverseArray function') // ['C', 'B', 'A']
log(reverseArray([1, 2, 3, 4, 5]), 'reverseArray function') // [5, 4, 3, 2, 1]


// ? (6) Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedArray.
/* // capitalizing the first
  const toTitleCase = (str) => {
    str = str.toLowerCase()
    str = str[0].toUpperCase().concat(str.slice(1))
    return str
  }
*/

function capitalizedArray(arr) {
  return arr.map(el => {
    if (typeof (el) !== 'string') return el
    return el.toUpperCase()
  })
}
log(capitalizedArray(['abc', 123, true]), 'capitalizedArray function')


// ? (7) Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const globalArray = [1, 2, 3]

function addItem(x) {
  globalArray.push(x)
  return globalArray
}
log(addItem(4))


// ? (8) Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(idx) {
  if (idx >= globalArray.length) return `${idx} out of range`
  globalArray.splice(idx, 1)
  return globalArray
}
log(removeItem(1))


// ? (9) Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(num) {
  const odds = num % 2 === 0 ? num / 2 : num / 2 + 0.5
  const evens = num - odds + 1

  return `
  The number of odds are ${odds}
  The number of evens are ${evens}
  `
}

log(evensAndOdds(100), 'evensAndOdds function')
// The number of odds are 50.
// The number of evens are 51. // assuming 0 is included --- and 0 is an even number


// ? (10) Write a function which takes any number of arguments and return the sum of the arguments
/*  alternative to having ...args as a parameter
    ! this is ambiguous because at first glance it does NOT
      ! imply that the function can accept more than one argument
      ! or any argument at all
    > use ...args as parameter moving forward */
function sumAlt() {
  log([...arguments], '...arguments')
  return [...arguments].reduce((acc, curr) => acc + curr, 0)
}

// > use ...args as parameter moving forward
function sum(...args) {
  log(args, '...args')
  return args.reduce((acc, curr) => acc + curr, 0)
}
log(sum(1, 2, 3), 'sum function of unlimited arguments') // -> 6
log(sum(1, 2, 3, 4), 'sum function of unlimited arguments') // -> 10


// ? (11) Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
  const length = 7
  return [...Array(length)]
    .map(() => (Math.floor(Math.random() * 16)).toString(16))
    .join('')
}
log(userIdGenerator());
// 41XTDbE
