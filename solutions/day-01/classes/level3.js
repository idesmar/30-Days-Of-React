import { log, levelStart } from './../../global.js'

levelStart(3)
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
const ages = [
  31, 26, 34, 37, 27,
  26, 32, 32, 26, 27,
  27, 24, 32, 33, 27,
  25, 26, 38, 37, 31,
  34, 24, 33, 29, 26
]

class Statistics {
  constructor(sample = []) {
    this.sample = sample
  }
  count() { return this.sample.length }
  sum() { return this.sample.reduce((acc, curr) => acc + curr, 0) }
  min() {
    const sample = [...this.sample]
    let min = sample[0]
    sample.forEach(el => { if (el <= min) min = el })
    return min
  }
  max() {
    const sample = [...this.sample]
    let max = sample[0]
    sample.forEach(el => { if (el >= max) max = el })
    return max
  }
  range() { return this.max() - this.min() }
  mean() {
    const result = this.sum() / this.count()
    return this.#roundTo(result, 0)
  }
  median() {
    // note: copy is created to maintain integrity of original data; since array will be sorted later on
    // const arr2 = arr1 does NOT create a copy, rather it only refers to the original data
    const sample = [...this.sample] // > this.sample.slice() is an alternative
    // sort mutates the array copy --- keeping the original un-mutated
    sample.sort()
    const len = sample.length
    return len % 2 !== 0
      ? sample[Math.floor(len / 2)]
      : (sample[len / 2 - 1] + sample[len / 2]) / 2
  }
  mode() {
    const sample = [...this.sample]
    // * OPTION 1
    let count = 0
    let modes = []
    // get highest count and array of modes based on the count vale
    sample.forEach(el => {
      // ensure that there are no repeating mode of the same number
      if (!modes.includes(el)) {
        const elCount = sample.filter(el2 => el2 === el).length
        // add another mode if it has the same count
        if (count === elCount) modes.push(el)
        // if count needs to be changed, reset using modes = [el]
        if (count < elCount) { count = elCount; modes = [el]; }
      }
    })
    return !modes.length
      ? undefined
      : modes.length > 1
        ? modes.map(el => {
          let mode = el
          return { mode, count }
        })
        : { mode: modes[0], count }
    /* // * OPTION 2
    let uniqueEntries = []
    let maxCount = 0
    // get array of unique number objects { mode, count }
    const unique = sample.reduce((acc, curr) => {
      if (!uniqueEntries.includes(curr)) {
        let mode = curr
        let count = sample.filter(curr1 => curr1 === curr).length
        // get the highest count by comparing maxCount and count
        if (count > maxCount) maxCount = count
        uniqueEntries.push(curr)
        acc.push({ mode, count })
      }
      return acc
    }, [])
    // get array of modes using the maxCount acquired through sample.reduce()
    const modes = unique.filter(mode => mode.count === maxCount)
    // return object if only one mode and array of objects if more than 1
    return modes.length === 1 ? modes[0] : modes
    */
    /* // * OPTION 3
    // get the highest count
    let count = 0
    sample.forEach(el => {
      const elCount = sample.filter(el2 => el2 === el).length
      if (elCount >= count) count = elCount
    })
    // get modes that have the same value of count
    let modes = []
    sample.forEach(el => {
      const unique = !modes.includes(el)
      const elCount = sample.filter(el2 => el2 === el).length
      // ensure that there are no repeating modes
      if (unique && elCount === count) modes.push(el)
    })
    // return {mode: [...], count} if there is more than one mode
    const mode = modes.length === 1 ? modes[0] : modes
    return { mode, count }
    */
  }
  var() {
    const sample = [...this.sample]
    const accurateMean = this.sum() / this.count()
    const result = sample.reduce((acc, curr) => acc + ((curr - accurateMean) ** 2), 0) / this.count()
    return this.#roundTo(result, 1)
  }
  std() {
    const variance = this.var()
    const result = Math.sqrt(variance)
    return this.#roundTo(result, 1)
  }
  freqDist() {
    const sample = [...this.sample]
    const unique = []
    const freqDist = []

    sample.forEach(entry => {
      if (!unique.includes(entry)) {
        unique.push(entry)
        const freq = sample.filter(el => el === entry).length / this.count() * 100
        freqDist.push({freq, entry})
      }
    })
    /*
      (a, b) => a - b means ascending (same as array.sort())
      (a, b) => b - a means descending (same as array.reverse())

      note: callback function from MDN
      function compare(a, b) {
        if (a < b by some ordering criterion) return -1
        if (a > b by the ordering criterion) return 1
        // a must be equal to b
        return 0
      }
      [READ MORE ON MDN]
      (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)
    */
    return freqDist.sort((a, b) => {
      // > same structure with MDN reference but in reverse
      // reverse of if (a < b) return -1
      if (a.freq > b.freq) return -1
      // reverse of if (a > b) return 1
      if (a.freq < b.freq) return 1
      return b.entry - a.entry
      /*
        > alternative
        if (a.freq > b.freq) return -1
        if (a.freq === b.freq) return b.entry - a.entry
      */
    }).map(el => `(${el.freq.toFixed(1)}, ${el.entry})`) // * map to restructure array and contents
  }
  // note: trying out private method
  #roundTo(num, decimal) {
    return +(num.toFixed(decimal))
  }
  describe() {
    const modeResult = this.mode()
    // * callback function for map to restructure object os string
    const restructure = el => `(${el.mode}, ${el.count})`
    const restructuredMode = Array.isArray(modeResult)
      ? modeResult.map(restructure).join(', ')
      : [modeResult].map(restructure).join('')

    const count = `Count:  ${this.count()}`
    const sum = `Sum:  ${this.sum()}`
    const min = `Min:  ${this.min()}`
    const max = `Max:  ${this.max()}`
    const range = `Range:  ${this.range()}`
    const mean = `Mean:  ${this.mean()}`
    const median = `Median:  ${this.median()}`
    const mode = `Mode:  ${restructuredMode}`
    const variance = `Variance:  ${this.var()}`
    const std = `Standard Deviation:  ${this.std()}`
    const freqDist = `Frequency Distribution:  [${this.freqDist().join(', ')}]`

    return [count, sum, min, max, range,
            mean, median, mode, variance,
            std, freqDist].join('\n')
  }
}

const statistics = new Statistics(ages)

log('Count: ', statistics.count()) // 25
log('Sum: ', statistics.sum()) // 744
log('Min: ', statistics.min()) // 24
log('Max: ', statistics.max()) // 38
log('Range: ', statistics.range()) // 14
log('Mean: ', statistics.mean()) // 30 // ? 29.76
log('Median: ',statistics.median()) // 29
log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
log('Variance: ',statistics.var()) // 17.5 // ? 17.5424
log('Standard Deviation: ', statistics.std()) // 4.2  // ? 4.188364836066696
log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
// you output should look like this

log(statistics.describe())
// Count: 25
// Sum:  744
// Min:  24
// Max:  38
// Range:  14
// Mean:  30
// Median:  29
// Mode:  (26, 5)
// Variance:  17.5
// Standard Deviation:  4.2
// Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29),
