/*---- Constants ----*/
import { getRandomQuote, clown } from "../data/quotes.js"
import * as taylorAudio from './audio.js'

console.log(clown)
console.log(taylorAudio)

/** variables */

const quotes = []

/** Cached Element references */

const quoteBtn = document.querySelector('#quote-button') 
const cardContainer = document.querySelector('#card-container')

console.log(quoteBtn, cardContainer)



/*------Event LIsteners---*/

quoteBtn.addEventListener('click', () => {
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
  console.log(quotes)
})



/*-----Functions ----*/
