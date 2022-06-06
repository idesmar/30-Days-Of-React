import { log, levelStart } from '../../global.js'

// log(`LEVEL 1 START HERE ${separator}`)
levelStart(1)

// ? (1) Declare an empty array
const emptyArray = [] // * recommended
const emptyArray2 = Array()
const emptyArray3 = new Array()
log(emptyArray3, 'emptyArray3')


// ? (2) Declare an array with more than 5 number of elements
const arr = [1, 2, 3, 4, 5, 6]


// ? (3) Find the length of your array
log(arr.length)


// ? (4) Get the first item, the middle item and the last item of the array
log(arr[0], arr[3], arr[arr.length - 1])


// ? (5) Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'string', { item: 1 }, ['hello', 'world'], 5, true]


// ? (6) Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


// ? (7) Print the array using console.log()
console.table(itCompanies)


// ? (8) Print the number of companies in the array
log(itCompanies.length)


// ? (9) Print the first company, middle and last company
log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])


// ? (10) Print out each company
itCompanies.forEach(el => log(el))


// ? (11) Change each company name to uppercase one by one and print them out
// used map to create a new array instead of mutating the original array
itCompanies.map(el => el.toUpperCase())


// ? (12) Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const msg = itCompanies.reduce((acc, curr, idx) => {
  if (idx === itCompanies.length - 1) return `${acc} and ${curr} are big IT companies`
  if (idx === itCompanies.length - 2) return `${acc}${curr} `
  return `${acc}${curr}, `
},'')
log(msg)


// ? (13) Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyExists = (company) => {
  // used toLowerCase() to remove case sensitivity
  return itCompanies.map(el => el.toLowerCase()).includes(company.toLowerCase())
    ? company
    : `${company} is not found`
}
log(companyExists('amazon')) // testing the function


// ? (14) Filter out companies which have more than one 'o' without the filter method
let doubleO = itCompanies.reduce((acc, curr) => {
  return (/oo/ig.test(curr)) ? acc.concat(curr) : acc
}, [])
log(doubleO)


// ? (15) Sort the array using sort() method
const sortedItCompanies = itCompanies.sort()
log(sortedItCompanies)


// ? (16) Reverse the array using reverse() method
const reversedItCompanies = itCompanies.reverse()
log(reversedItCompanies)


// ? (17) Slice out the first 3 companies from the array
// ! sort() and reverse() mutates the array
const firstThree = itCompanies.slice(0, 3)
log(firstThree)


// ? (18) Slice out the last 3 companies from the array
const lastThree = itCompanies.slice(itCompanies.length - 3)
log(lastThree)


// ? (19) Slice out the middle IT company or companies from the array
const mid = Math.floor(itCompanies.length/2)
const middleCompany = itCompanies.slice(mid, mid + 1)
log(middleCompany)


// ? (20) Remove the first IT company from the array
const firstRemoved = itCompanies.shift(itCompanies[0])


// ? (21) Remove the middle IT company or companies from the array
const midRemoved = itCompanies.filter((el, idx) => idx !== mid)
log(midRemoved)


// ? (22) Remove the last IT company from the array
const lastRemoved = itCompanies.pop(itCompanies.length)
log(lastRemoved)


// ? (23) Remove all IT companies
const removeAll = itCompanies.reduce((acc, curr) => {
  if (curr) return acc
}, [])
log(removeAll)
// * may also use `itCompanies.splice()` to remove all contents of array
