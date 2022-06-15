import { log, levelStart } from '../../../../global.js'
import users from './users.js' // * using export default
import products from './products.js' // * using export default

levelStart(3)

// ? (1) Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  firstName: 'siege',
  lastName: 'anon',
  incomes: [
    {
      amount: 10000,
      description: 'full-time'
    },
    {
      amount: 4000,
      description: 'investment'
    }
  ],
  expenses: [
    {
      amount: 2000,
      description: 'mortgage'
    },
    {
      amount: 1000,
      description: 'utilities'
    }
  ],
  totalIncome: function () {
    return this.incomes.reduce((acc, curr) => acc + curr.amount, 0)
  },
  totalExpense: function () {
    return this.expenses.reduce((acc, curr) => acc + curr.amount, 0)
  },
  accountInfo: function () {
    return `${this.firstName} ${this.lastName}`
  },
  addIncome: function (amt, desc) {
    this.incomes.push({
      amount: amt,
      description: desc
    })
  },
  addExpense: function (amt, desc) {
    this.expenses.push({
      amount: amt,
      description: desc
    })
  },
  accountBalance: function () {
    // totalIncome - totalExpenses
    return this.totalIncome() - this.totalExpense()
  }
}

log(personAccount, 'personAccount')
log(personAccount.totalIncome(), 'totalIncome()')
log(personAccount.accountBalance(), 'accountBalance()')
personAccount.addIncome(100000000, 'jackpot')
log(personAccount.incomes, 'incomes with addIncome()')


// * Questions:2, 3 and 4 are based on the following two arrays: users and products
console.table(users.map(el => [el.username, el.password]))


// ? (2) Imagine you are getting the above users collection from a MongoDB database.
// ? a. Create a function called signUp which allows user to add to the collection.If user exists, inform the user that he has already an account.
const validateSignUp = (email, username) => {
  const formSignUpResult = document.querySelector('[data-signUp-result]')
  formSignUpResult.innerText = ''

  const checkUsers = (key, value) => {
    let isExisting = false

    // traverse and check users imported from users.js
    users.forEach(obj => {
      if (obj[key] === value) isExisting = true
    })
    return isExisting
  }

  if (checkUsers('username', username) || checkUsers('email', email)) {
    formSignUpResult.innerText = 'User Exists'
  }
}

const signUpForm = document.querySelector('[data-signUp-form]')
signUpForm.addEventListener('submit', e => {
  e.preventDefault()
  const form = e.target
  const email = form.querySelector('#email')
  const username = form.querySelector('#username')

  // process here
  validateSignUp(email.value, username.value)

  // clear all
  email.value = username.value = password.value = ''
})

// ? b. Create a function called signIn which allows user to sign in to the application
// returns array element of either an object or an empty array
const getUserMatch = (uname, pass) => {
  const userMatch = users.filter(el => {
   return (el.username + el.password === uname + pass)
  })
  return userMatch
}


// * helper function for getting a new array with removed element
const getArrayExcludingRemoveElement = (arr, removeIdx) => {
  return arr.slice(0, removeIdx).concat(arr.slice(removeIdx + 1))
}


// > ANSWER 3A < ====================================
const rateProduct = (user) => {
  const userRates = document.querySelectorAll('[data-user-rate]')

  const setUserRate = (e, preChange) => {
    const node = e.target
    let val = node.value // > let --- modifiable if (+val > 5 || +val < 0)
    const productId = node.dataset.productId

    /*  guard clause for beyond rating requirement
        '5e2' (25) will however trigger a change event
      ! incomplete e (exponent) may not trigger change; input eg. 'e', '5e' */
    if (+val > 5 || +val < 0) {
      // ! previous rating will be removed
      // > val is changed to access removeRating() below
      val = node.value = ''

      /* return will stop the function, however,
         will not update the ratings
         --- hence, use of return here is aborted */
    }

    /*
      if val === '' remove object in ratings
    > note that productId and user referenced inside function
      are from layers above; see individual notes
    */
    const removeRating = () => {
      products.forEach(product => {
        // * productId is defined one layer above
        if (product._id === productId) {
          const ratingsArr = product.ratings
          // * user (or user._id) is an arg from parent function (rateProduct(user))
          const removeObj = ratingsArr.filter(rating => rating.userId === user._id)
          const removeIdx = ratingsArr.indexOf(...removeObj)
          // const newRatings = ratingsArr.slice(0, removeIdx).concat(ratingsArr.slice(removeIdx + 1))
          const newRatings = getArrayExcludingRemoveElement(ratingsArr, removeIdx)
          product.ratings = newRatings
        }
      })
    }

    const changeRating = () => {
      products.forEach(product => {
        // * productId is defined one layer above
        if (product._id === productId) {
          const ratingsArr = product.ratings
          const updateObj = ratingsArr.filter(rating => rating.userId === user._id)
          const updateIdx = ratingsArr.indexOf(...updateObj)
          product.ratings[updateIdx].rate = val
        }
      })
    }

    const addRating = () => {
      products.forEach(product => {
        if (product._id === productId) {
          // * note that rate (Number) and val (string) hence +val
          product.ratings.push({ userId: user._id, rate: +val })
        }
      })
    }


    (preChange === '')
      ? addRating()
      : (!val) // if val is !falsy (0, '', etc)
        ? removeRating()
        : changeRating()

    // refresh data by calling showProducts(user) // note that that at this point
    showProducts(user)
  }

  userRates.forEach(input => {
    // preChange is value of input prior to even trigger
    const preChange = input.value

    input.addEventListener('change', e => {
      // used e instead of e.target for consistency wth other eventListener
      setUserRate(e, preChange)
    })
  })
}


// > ANSWER 4 < ====================================
const likeProduct = (user) => {
  const userLikes = document.querySelectorAll('[data-user-like]')

  const setUserLike = (e) => {
    const node = e.target
    const val = node.value
    const productId = node.dataset.productId

    if (val === 'Like') {
      node.value = 'Unlike'
      products.forEach(product => {
        if (product._id === productId) {
          product.likes.push(user._id)
        }
      })
    }
    if (val === 'Unlike') {
      node.value = 'Like'
      products.forEach(product => {
        if (product._id === productId) {
          const removeIdx = product.likes.indexOf(user._id)
          // const newLikes = product.likes.slice(0, removeIdx).concat(product.likes.slice(removeIdx + 1))
          const newLikes = getArrayExcludingRemoveElement(product.likes, removeIdx)
          product.likes = newLikes
        }
      })
    }

    // call showProducts to refresh data
    showProducts(user)
  }

  userLikes.forEach(btn => {
    btn.addEventListener('click', setUserLike)
  })
}


// return input(rate) + button(like) based on userId
const getUserInputsFragment = (user, product) => {

  const getUserRate = (user, product) => {
    return product.ratings.map(el => {
      return (el.userId === user._id) ? el.rate : ''
    }).join('')
  }

  const getUserLike = (user, product) => {
    return product.likes.includes(user._id) ? 'Unlike' : 'Like'
  }

  const userRate = getUserRate(user, product)
  const userLike = getUserLike(user, product)

  /*
    * input works with all properties however
    ! keyboard-type-entry can still bypass requirements
      additional validation function is required
      but is fine for now since this is just an exercise
  */
  const res = `
  <input type="number" max="5" min="0" step="0.5"
    value="${userRate}" data-user-rate data-product-id=${product._id}>
  <input type="button"
    value="${userLike}" data-user-like data-product-id=${product._id}>
  `
  return res
}

// > ANSWER 3B < ====================================
const average = (arr) => {
  const ave = (arr.reduce((acc, curr) => {
    return acc + curr.rate
  }, 0) / arr.length)

  return ave ? ave.toFixed(2) : 'unrated'
}

const showProducts = (user) => {
  const productsSect = document.querySelector('[data-products]')

  productsSect.innerHTML = products.map(product => {
    const averageRating = average(product.ratings)
    const userInputsFragment = getUserInputsFragment(user, product)

    return `
    <div class="product">
      <p>Name: ${product.name}</p>
      <p>Description: ${product.description}</p>
      <p>Ratings: ${averageRating}</p>
      <p>Likes: ${product.likes.length}</p>
      <div>${userInputsFragment}</div>
    </div>
    `
  }).join('')

  likeProduct(user)
  rateProduct(user)
}

const signInForm = document.querySelector('[data-signIn-form]')
signInForm.addEventListener('submit', e => {
  e.preventDefault()
  const form = e.target
  const username = form.querySelector('#usernameIn')
  const password = form.querySelector('#passwordIn')
  const signInFormResult = document.querySelector('[data-signIn-result]')
  signInFormResult.innerText = ''

  // > user is an array [{...}] or []
  const user = getUserMatch(username.value, password.value)
  if (user.length === 0) {
    signInFormResult.innerText = 'No match found'
    return
  }

  const usernameHeader = document.querySelector('[data-username]')
  usernameHeader.innerText = `Hello ${username.value}!`

  // clear form
  username.value = password.value = ''

  // since user is an array --- user is spread to obtain object within
  showProducts(...user)
})


// ? (3) The products array has three elements and each of them has six properties.
// ? a. Create a function called rateProduct which rates the product

// ? b. Create a function called averageRating which calculate the average rating of a product


// ? (4) Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
