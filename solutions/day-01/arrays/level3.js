import { levelStart, log } from '../../global.js'
import { countries } from '../data/countries.js'

// log(`LEVEL 3 START HERE ${separator}`)
levelStart(3)

// ? (1) The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const getMedian = (arr) => {
  arr = arr.sort() // * mutates the original array
  const mid = Math.floor(arr.length / 2)
  const odd = arr.length % 2 === 1

  return odd
    ? arr[mid]
    : (arr[mid - 1] + arr[mid]) / 2
}
log(getMedian(ages), 'median')

const getAverage = (arr) => {
  return arr.reduce((acc, curr) => acc + curr) / arr.length
}
log(getAverage(ages), 'average')

const getRange = (arr) => {
  return Math.max(...arr) - Math.min(...arr)
}
log(getRange(ages), 'range')

// Compare the value of (min - average) and (max - average), use abs() method
const getComparison = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const ave = getAverage(arr)

  return Math.abs((max - ave) - (min - ave))
}
log(getComparison(ages), 'comparison')

// 1.Slice the first ten countries from the countries array
log(countries.slice(0, 10), 'first ten')


// ? (2) Find the middle country(ies) in the countries array
const getMiddle = (arr) => {
  const odd = arr.length % 2 === 1
  const mid = Math.floor(arr.length / 2)

  return odd
    ? [arr[mid]]
    : [arr[mid - 1], arr[mid]]
}
log(getMiddle(countries), `middle country/ies of ${countries.length} countries`)


// ? (3) Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const divideToTwoArrays = (arr) => {
  const odd = arr.length % 2 === 1
  const mid = Math.floor(arr.length / 2)

  return odd
    ? [arr.slice(0, mid + 1), arr.slice(mid + 1)]
    : [arr.slice(0, mid), arr.slice(mid)]
}
log(divideToTwoArrays(countries), 'divide to two arrays')
