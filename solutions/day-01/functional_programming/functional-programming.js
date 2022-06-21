import { log, levelStart } from '../../global.js'

levelStart('functional programming')

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// ? (1) Print the price of each product using forEach
products.forEach(product => {
  log(product.price, 'print using forEach')
})


// ? (2) Print the product items as follows using forEach

// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.

products.forEach(el => {
  const { product, price } = el

  // +price removes any 0, '' (empty string), and ' ' (string of whitespace)
  const priceInEuros = +price ? `${price} euros` : 'unknown'
  log(`The price of ${product} is ${priceInEuros}.`)
})

/*
  const space = ' ', empty = '', zero = 0
  all of the above will return zero (therefore falsy)
  when unary plus (+) is used
*/


// ? (3) Calculate the sum of all the prices using forEach
function calcUsingForEach(arr) {
  let sum = 0
  arr.forEach(el => {
    const { product, price } = el
    // > notice that unary plus is used because of empty price values
    sum += +price
  })
  return sum
}
log(calcUsingForEach(products), 'calcUsingForEach function')


// ? (4) Create an array of prices using map and store it in a variable prices
const prices = products.map(product => {
  /*
    ! leaving blank did not produce the expected result {  , price}
      (which is to skip the key:value)
      hence, used _ instead as a variable name
    note: since _ is not the key used in the original object,
    > it will not have access to the value assigned to the original key
  */
  const { _, price } = product
  return price
})
log(prices, 'prices using map')


// ? (5) Filter products with prices
/* // * longer version with destructuring
  const productsWithPrices = products.filter(el => {
    const { product, price } = el
    // * if returned value is true, entire element will be included in output array
    return +price
  })
*/

const productsWithPrices = products.filter(product => +product.price)
log(productsWithPrices, 'productsWithPrices')


// ? (6) Use method chaining to get the sum of the prices(map, filter, reduce)
const sumOfPrices = products
  .map(product => product.price)
  .filter(price => +price)
  .reduce((acc, curr) => acc + curr, 0)
log(sumOfPrices, 'sum by chaining map -> filter -> reduce')


// ? (7) Calculate the sum of all the prices using reduce only
const sumOfPricesReduce = products.reduce((acc, curr) => acc + +curr.price, 0)
log(sumOfPricesReduce, 'sum using reduce only')


// ? (8) Find the first product which doesn't have a price value
/*  take note of !+ (NOT operator followed by unary plus)
    (!) to negate the result of unary plus (0 will become true)
    (+) to transform string to number ('' and ' ' will become 0)
*/
const firstIdxNoPrice = products.findIndex(product => !+product.price)
const firstProdNoPrice = products[firstIdxNoPrice].product

/*  // * one line version of answer above
      const firstProdNoPrice = products[products.findIndex(product => !+product.price)].product
*/
log(firstProdNoPrice, 'firstProdNoPrice')

const firstProdObjNoPrice = products[firstIdxNoPrice]
log(firstProdObjNoPrice, 'firstObjNoPrice')


// ? (9) Find the index of the first product which does not have price value
// refer to line after question (8)
log(firstIdxNoPrice, 'firstIdxNoPrice')


// ? (10) Check if some products do not have a price value
const haveSomeNoPrice = products.some(product => !+product.price)
log(haveSomeNoPrice, 'haveSomeNoPrice')


// ? (11) Check if all the products have price value
const areAllWithPrices = products.every(product => +product.price)
log(areAllWithPrices, 'areAllWithPrices')


// ? (12) Explain the difference between forEach, map, filter and reduce
/*
  * forEach iterates through array and can mutate each element of original array
  * map iterates through array and returns each element w/ or w/out alterations to the output array
  * filter iterates through array and outputs elements to a new array if callback function returns true
  * reduce compares/processes an/the accumulator and the current element continuously until all has been reduced to a single data or object
*/


// ? (13) Explain the difference between filter, find and findIndex
/*
  note: all callbacks should return a boolean value
  * filter iterates through array and outputs elements to a new array if callback function returns true
  * find outputs the element where the first occurrence of a callback returns true
  * findIndex outputs the element's index where the first occurrence of callback returns true
*/


// ? (14) Explain the difference between some and every
/*
  * some returns a boolean value (true) if AT LEAST ONE of the array elements returns true (determined using callback function)
  * every returns a boolean value (true) if ALL array elements returns true (determined using callback function)
*/
