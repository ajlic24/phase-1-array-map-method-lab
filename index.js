const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// const randomSentence = ['hi there my love']

// const capitalize = (array) => {
//   const splitArray = []
//   const joinArray = []
//   let x = array.map(letter => {
//     let splitWords = letter.split(' ')
//     return splitArray.push(splitWords)
//   })
//   console.log(x)
//   // Another function
//   for(let index = 0; index < splitArray.length; index++) {
//     tutorials[index].map((word) => {
//       let capitalized = word[0].toUpperCase() + word.slice(1)
//       joinArray.push(capitalized)
//     })
//   }

//   return joinArray.join(' ')

// }

// console.log(capitalize(tutorials))

function cap(sentence) {
  let splitWords = sentence.split(' ')
  return splitWords.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}

function titleCased() {
  return tutorials.map(sent => cap(sent))
}
