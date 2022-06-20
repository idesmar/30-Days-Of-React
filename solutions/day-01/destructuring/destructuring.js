import { log, levelStart } from '../../global.js'

levelStart('destructuring')

// ? Create a function called getPersonInfo. The getPersonInfo function takes an object parameter. The structure of the object and the output of the function is given below. Try to use both a regular way and destructuring and compare the cleanness of the code.

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

function getPersonalInfo(props) {
  const { firstName, lastName, age, country, job, skills, languages } = props
  // const [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9] = skills
  const [language1, language2, language3] = languages

  // * destructuring may not be the best here due to the number of array elements
  const skillsFragment = skills.map((skill, idx) => {
    return (idx === skills.length - 1)
      ? `and ${skill}`
      : skill
  }).join(', ')

  return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skillsFragment}. He speaks ${language1}, ${language2} and a little bit of ${language3}`
}

log(getPersonalInfo(person), 'getPersonalInfo function')

const comparison = 'Asabeneh Yetayeh lives in Finland. He is 250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)'

log(comparison, 'comparison')