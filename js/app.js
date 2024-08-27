/*---- Constants ----*/
import { getRandomQuote} from "../data/quotes.js"
import * as taylorAudio from './audio.js'


/** variables */

const quotes = []

/** Cached Element references */

const quoteBtn = document.querySelector('#quote-button') 
const cardContainer = document.querySelector('#card-container')




/*------Event LIsteners---*/

quoteBtn.addEventListener('click', createQuote)



/*-----Functions ----*/
function createQuote() {
  const newQuote = getRandomQuote()
  quotes.push(newQuote)
  console.log(quotes)
  render()
}


function render() {
  cardContainer.innerHTML = ''
  quotes.forEach(quote => {
    appendQuote(quote)
  })
}

function appendQuote(quote) { 
  // Create a new div element to hold the quote
  let quoteCard = document.createElement('div')
  
  // Add a class name "card" to the div for styling
  quoteCard.className = `card`
  
  // Set the content inside the div using the quote's text
  // If the quote is from Taylor Swift, show "T-Swift"
  // Otherwise, show "Hater Tot"
  quoteCard.innerHTML = `
    <div> 
    <p> ${quote.text} </p>
    <p> ${quote.isTaylor ? '--- T-Swift' :'--Hater Tot'}</p>
    </div>`
  
  // Add the div (quote card) to the main container on the page
  cardContainer.appendChild(quoteCard)
}
